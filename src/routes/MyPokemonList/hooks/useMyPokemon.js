import React, { useContext, useEffect, useState } from 'react';

import isEmpty from 'lodash/isEmpty';

import { GlobalContext } from '../../../context/GlobalState';

import LSHelper from '../../../helpers/LSHelper';

export const useMyPokemon = props => {
  const [myPokemonList, setMyPokemonList] = useState([]);
  const { myPokemon, deleteMyPokemon, deleteAllMyPokemon } = useContext(GlobalContext);

  const handleDelete = id => {
    let myPokemonList = LSHelper.getLocalStorage();
    const data = myPokemonList.filter(item => item.id !== id);

    LSHelper.setLocalStorage(data);
    setMyPokemonList(data);
    deleteMyPokemon(id);
  };

  const handleDeleteAll = () => {
    LSHelper.setLocalStorage([]);
    setMyPokemonList([]);
    deleteAllMyPokemon();
  };

  const handleFetches = () => {
    const dataLocalStorage = LSHelper.getLocalStorage();
    const dataList = !isEmpty(dataLocalStorage) 
      ? dataLocalStorage 
      : !isEmpty(myPokemon) 
        ? myPokemon 
        : [];
    setMyPokemonList(dataList);
  };

  useEffect(() => {
    handleFetches();
  }, []);

  return {
    myPokemon: myPokemonList,
    handleDelete,
    handleDeleteAll
  };
};

export default useMyPokemon;