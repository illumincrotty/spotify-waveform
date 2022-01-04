import { storeToken } from './script/stores/storeToken';
import { writablePersistent } from './script/stores/storePersistent';
export const token = storeToken();
export const themeNumber = writablePersistent('current-theme', 1);
export const themeFlip = writablePersistent('theme-flip', false);
