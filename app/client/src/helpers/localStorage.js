export const setLocalStorage = (key, item) => {
    const convertedItem = JSON.stringify(item);
    localStorage.setItem(key, convertedItem);
  };