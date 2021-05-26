import axios from 'axios';

export const getPokemon = () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon`);
};

export const gotoNextPrev = url => {
  return axios.get(`${url}`);
};

export const getPokemonById = id => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};