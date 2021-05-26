import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import * as types from './types';

//Initial state
const initialState = {
  myPokemon: []
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteMyPokemon(id) {
    dispatch({
      type: types.DELETE_MYPOKEMON,
      payload: id
    });
  };

  function deleteAllMyPokemon() {
    dispatch({
      type: types.DELETE_ALL_MYPOKEMON
    });
  };

  function addMyPokemon(pokemon) {
    dispatch({
      type: types.ADD_MYPOKEMON,
      payload: pokemon
    });
  };

  return (<GlobalContext.Provider value={{
    myPokemon: state.myPokemon,
    deleteMyPokemon,
    deleteAllMyPokemon,
    addMyPokemon
  }}> 
    {children}
  </GlobalContext.Provider>);
};