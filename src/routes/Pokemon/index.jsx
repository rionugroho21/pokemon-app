import React from 'react';
import { Link } from 'react-router-dom';

import get from 'lodash/get';

import usePokemon from './hooks/usePokemon';

import pokeball from '../../assets/images/pokeball.png';

import './styles.scss';

export const Pokemon = props => {
  const {
    loading,
    listPokemon,
    nextPageUrl,
    prevPageUrl,
    gotoNextPage,
    gotoPrevPage,
    handleCheckOwned
  } = usePokemon(props);

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon">
          <div className="pokemon-nav">
            <p className="pokemon-nav-total">Total {listPokemon.length}</p>
            <div className="pokemon-nav-pagination">
              {prevPageUrl && <button onClick={() => gotoPrevPage(prevPageUrl)}>Previous</button>}
              {nextPageUrl && <button onClick={() => gotoNextPage(nextPageUrl)}>Next</button>}
            </div>
          </div>

          <div className="pokemon-list">
            {listPokemon.map((list, key) => {
              // const url = get(list, 'url', '');
              // const pokemonIndex = url.split('/')[url.split('/').length - 2];
              // const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
              const owned = handleCheckOwned(list.name);

              return (
                <Link to={`/pokemon/${list.name}`} className="pokemon-list-item" key={key}>
                  <p>Owned : {owned}</p>
                  <div className="pokemon-list-item-image">
                    <img src={pokeball} alt="Pokeball" width="110" />
                  </div>
                  <div className="pokemon-list-item-title">
                    {list.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;