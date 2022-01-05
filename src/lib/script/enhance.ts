const defaults = {
	classname: 'js',
};

export const enhance = (node: HTMLElement, options = {}) => {
	const { classname } = { ...defaults, ...options };

	node.classList.add(classname);
};
