import { storeToken } from './script/stores/storeToken';
import { writablePersistent } from './script/stores/storePersistent';
export const token = storeToken();
export const themeNumber = writablePersistent('current-theme-number', 1);
export const themeDark = writablePersistent('theme-dark', undefined as boolean);
