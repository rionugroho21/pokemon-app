import * as types from './types';

export default (state, action) => {
  switch(action.type) {
    case types.DELETE_MYPOKEMON:
      return {
        ...state,
        myPokemon: state.myPokemon
          .filter(myPokemon => myPokemon.id !== action.payload)
      }
    case types.DELETE_ALL_MYPOKEMON:
        return {
          ...state,
          myPokemon: []
        }
    case types.ADD_MYPOKEMON:
      return {
        ...state,
        myPokemon: [action.payload, ...state.myPokemon]
      }
    default:
      return state;
  }
};
