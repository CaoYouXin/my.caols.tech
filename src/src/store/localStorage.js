import { data, purge } from './data';

export const toLocalStorage = (obj) => {
  try {
    window.localStorage.setItem('obj', JSON.stringify(obj));
  } catch (ignored) { }
}

export const fromLocalStorage = () => {
  try {
    const serialized = window.localStorage.getItem('obj');
    if (serialized === null) {
      return data;
    }

    return purge(JSON.parse(serialized));
  } catch (e) {
    console.log(e);
    return data;
  }
}