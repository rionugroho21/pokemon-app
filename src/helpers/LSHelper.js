import isEmpty from 'lodash/isEmpty';

const setLocalStorage = data => {
  localStorage.setItem('myPokemonList', JSON.stringify(data));
};

const getLocalStorage = () => {
  const dataLocalStorage = JSON.parse(localStorage.getItem('myPokemonList'));

  return !isEmpty(dataLocalStorage) ? dataLocalStorage : [];
};

const saveToLocalStorage = data => {
  const dataLocalStorage = getLocalStorage();
  let myPokemonList = !isEmpty(dataLocalStorage) ? dataLocalStorage : [];
  myPokemonList.push(data);

  setLocalStorage(myPokemonList);
};

export default {
  setLocalStorage,
  getLocalStorage,
  saveToLocalStorage
};