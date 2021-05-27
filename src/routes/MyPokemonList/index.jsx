import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import useMyPokemon from './hooks/useMyPokemon';

import pokeball from '../../assets/images/pokeball.png';

import './styles.scss';

export const MyPokemonList = props => {
  const {
    myPokemon,
    handleDelete,
    handleDeleteAll
  } = useMyPokemon(props);

  return (
    <div className="mypokemon">
      <h3>My Pokemon</h3>

      <div className="mypokemon-list">
        {myPokemon.map((list, key) => {
          const pokemonImg = get(list, 'data.sprites.front_default', pokeball);

          return (
            <div key={key} className="mypokemon-list-item">
              <Link to={`/pokemon/${list.name}`}>
                <p>{list.myname}</p>
                <div className="mypokemon-list-item-image">
                  <img src={pokemonImg} alt="Pokemon" width="130" height="130" />
                </div>
                <div className="mypokemon-list-item-title">
                  {list.data.name}
                </div>
              </Link>
              <button className="mypokemon-list-item-delete" onClick={() => handleDelete(list.id)}>x</button>
            </div>
          );
        })}
      </div>

      <button className="mypokemon-delete" onClick={() => handleDeleteAll()}>Delete All Pokemon</button>
    </div>
  );
};

export default MyPokemonList;