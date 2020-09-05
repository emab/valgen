import Store from 'electron-store';
import { Value } from '../types/Value';

export const saveValueToStorage = (value: Value) => {
  const store = new Store();
  initStore(store);
  store.set('values', [...(store.get('values') as Value[]), value]);
};

export const getStoredValues = (): Value[] => {
  const store = new Store();
  initStore(store);
  return store.get('values') as Value[];
};

const initStore = (store: Store) => {
  if (!store.has('values')) {
    store.set('values', []);
  }
};
