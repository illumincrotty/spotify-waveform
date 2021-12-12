import '../../assets/css/dsSelect.css';
import { stateGen } from './stateGen';

type ID = string;
type textContent = string;

const generateID = () => stateGen(10);
class SelectImproved extends HTMLElement {
	static inputAttributes: [string, string][] = [
		['aria-controls', 'listbox'],
		['aria-expanded', 'false'],
		['aria-haspopup', 'listbox'],
		['role', 'combobox'],
		['tabindex', '0'],
	];

	static menuAttributes: [string, string][] = [
		['role', 'listbox'],
		['tabindex', '-1'],
	];

	static get observedAttributes() {
		return ['open'];
	}

	private menuElement: HTMLDivElement;
	private inputElement: HTMLDivElement;
	private options: HTMLElement[] = [];
	private idBase: string;
	private idToElementIndex: Map<ID, number> = new Map();
	private subscibers: ((ID: ID) => unknown)[] = [];

	private highlightIndex = 0;
	private activeIndex = 0;
	private menuOpen = false;
	private ignoreBlur = false;

	constructor() {
		super();

		// use id or set one if none is given
		this.idBase = this.id || generateID();
		this.id = this.idBase;

		// add styles for total element
		this.classList.add('ds-main', 'ds-select');

		//create and apply styles to input elements
		this.inputElement = document.createElement('div');
		for (const attr of SelectImproved.inputAttributes) {
			this.inputElement.setAttribute(attr[0], attr[1]);
		}
		this.inputElement.classList.add('ds-input');
		this.inputElement.setAttribute('id', `${this.idBase}-input`);

		this.menuElement = document.createElement('div');
		for (const attr of SelectImproved.menuAttributes) {
			this.menuElement.setAttribute(attr[0], attr[1]);
		}
		this.menuElement.classList.add('ds-menu');
		this.menuElement.setAttribute('id', `${this.idBase}-menu`);
	}
	connectedCallback() {
		this.options = [...this.children] as HTMLElement[];
		const placeholder = this.getAttribute('placeholder');
		const placeholderID = this.getAttribute('placeholderID');

		[...this.options].forEach((element, index) => {
			element.setAttribute('id', element.id || `${this.idBase}-${index}`);
			this.idToElementIndex.set(element.id, index);
			if (placeholderID && placeholderID === element.id) {
				this.activeIndex = index;
			}
		});

		// set first option as default
		if (!this.activeIndex && (placeholder || !this.options[0])) {
			this.inputElement.textContent = placeholder ?? 'Select';
		} else {
			this.select(this.activeIndex);
			// this.inputElement.textContent =
			// 	this.options[this.activeIndex].textContent;
			// this.options[selectPosition].setAttribute('ariaSelected', 'true');
		}

		this.append(this.inputElement);

		this.menuElement.append(...this.options);
		this.append(this.menuElement);

		// add event listeners
		this.menuElement.addEventListener('mousedown', (event: MouseEvent) => {
			this.ignoreBlur = true;
		});
		this.menuElement.addEventListener('mouseleave', (event: MouseEvent) => {
			this.ignoreBlur = false;
		});
		this.addEventListener('click', this.onClick);
		this.addEventListener('blur', this.onBlur, { capture: true });
		this.addEventListener('keydown', this.onKeyDown);
	}

	private onBlur = (event: FocusEvent): void => {
		if (this.ignoreBlur) {
			event.preventDefault();
			event.stopPropagation();
			this.ignoreBlur = false;
			return;
		}
		if (this.menuOpen && !this.ignoreBlur) {
			this.open = false;
		}
	};
	private onKeyDown = (event: KeyboardEvent) => {
		if (this.menuOpen) {
			switch (event.key) {
				case ' ':
				case 'Enter':
					event.preventDefault();
					this.select(this.highlightIndex);
					this.open = false;
					break;
				case 'ArrowUp': {
					event.preventDefault();
					if (this.highlightIndex - 1 >= 0) {
						this.highlight(this.highlightIndex - 1);
					}
					break;
				}
				case 'Tab': {
					if (event.shiftKey) {
						event.preventDefault();
						if (this.highlightIndex - 1 >= 0) {
							this.highlight(this.highlightIndex - 1);
						}
						break;
					}
				}
				case 'ArrowDown':
					event.preventDefault();
					if (this.highlightIndex + 1 < this.options.length) {
						this.highlight(this.highlightIndex + 1);
					}
					break;
				case 'ArrowLeft':
				case 'ArrowRight':
					event.preventDefault();
					break;

				case 'Escape':
					this.open = false;
					this.highlight(this.activeIndex);
					event.preventDefault();
					break;
				default:
					// console.log(event);
					break;
			}
		} else {
			switch (event.key) {
				case 'ArrowUp':
				case 'ArrowDown':
				case ' ':
				case 'Enter':
					this.open = true;
					this.highlight(this.activeIndex);
					event.preventDefault();
					break;
				default:
					break;
			}
		}
	};
	private onClick = (event: MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.target instanceof OptionImproved) {
			const choice = this.idToElementIndex.get(event.target.id);
			if (choice !== undefined) this.select(choice);
		}

		this.open = !this.menuOpen;
	};

	get open() {
		return this.menuElement.hasAttribute('open');
	}

	set open(openState: boolean) {
		this.classList.toggle('open', openState);
		this.menuOpen = openState;
		this.menuElement.setAttribute('aria-expanded', `${openState}`);
		if (openState) {
			this.inputElement.setAttribute(
				'aria-activedescendant',
				this.options[this.activeIndex].id
			);

			this.scrollIntoView({
				block: 'nearest',
			});
		} else {
			this.inputElement.removeAttribute('aria-activedescendant');
			this.inputElement.focus();
		}
	}

	highlight(index: number) {
		if (index < 0 || index >= this.options.length) return;
		this.options[this.highlightIndex].classList.remove('option-current');
		this.highlightIndex = index;
		this.options[this.highlightIndex].classList.add('option-current');
	}
	removeHighlight(index: number) {
		this.options[this.highlightIndex].classList.remove('option-current');
	}

	select(index: number) {
		if (index < 0 || index >= this.options.length) return;
		this.options[this.activeIndex].setAttribute('ariaSelected', 'false');

		this.activeIndex = index;
		this.options[this.activeIndex].setAttribute('ariaSelected', 'true');
		this.inputElement.textContent =
			this.options[this.activeIndex].textContent;
		this.removeHighlight(index);
		this.subscibers.forEach((subs) =>
			subs(
				this.options[this.activeIndex].getAttribute('value') ??
					this.options[this.activeIndex].id
			)
		);
	}

	attributeChangedCallback(
		name: string,
		oldValue: string | boolean | null,
		newValue: string | boolean | null
	) {
		if (oldValue === newValue) return;
		console.log(
			`${name} attribute has been changed from ${oldValue} to ${newValue}`
		);
	}

	subscribe(sub: (ID: string) => unknown): void {
		this.subscibers.push(sub);
	}
}

class OptionImproved extends HTMLElement {
	static startingAttributes = [
		['ariaSelected', 'false'],
		['role', 'option'],
	];
	constructor() {
		super();
		for (const attribute of OptionImproved.startingAttributes) {
			if (
				attribute[0] === 'ariaSelected' &&
				!this.hasAttribute('ariaSelected')
			)
				this.setAttribute(attribute[0], attribute[1]);
		}
		this.classList.add('ds-option');
	}
}

const register = (
	name: string,
	constructor: CustomElementConstructor,
	options?: ElementDefinitionOptions
) => {
	const exists = window.customElements.get(name);
	if (!exists) {
		window.customElements.define(name, constructor, options);
	}
};

register('ds-select', SelectImproved);
register('ds-option', OptionImproved);

const isImprovedSelect = (input: unknown): input is SelectImproved => {
	return input instanceof SelectImproved;
};

export { isImprovedSelect };
