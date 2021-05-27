import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PopupFailed from './components/PopupFailed/PopupFailed';
import PopupCatch from './components/PopupCatch/PopupCatch';

import get from 'lodash/get';

import usePokemonDetail from './hooks/usePokemonDetail';

import { GlobalContext } from '../../context/GlobalState';

import './styles.scss';

export const PokemonDetail = props => {
  const {
    loading,
    pokemonDetail,
    open,
    isCaught,
    message,
    isExist,
    isNullName,
    handleCatch,
    handleModal,
    handleSave,
    handleNaming
  } = usePokemonDetail(props);

  const abilility = get(pokemonDetail, 'abilities', []);
  const types = get(pokemonDetail, 'types', []);
  const stats = get(pokemonDetail, 'stats', []);
  const moves = get(pokemonDetail, 'moves', []);

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon-detail">
          <div className="pokemon-name">{get(pokemonDetail, 'name', '')}</div>

          <div className="pokemon-image">
            <div className="pokemon-image-item">
              <div className="pokemon-image-item-img">
                <img src={get(pokemonDetail, 'sprites.front_default', '')} alt="Pokemon Normal Front" />
              </div>
              <span>Normal Front</span>
            </div>
            <div className="pokemon-image-item">
              <div className="pokemon-image-item-img">
                <img src={get(pokemonDetail, 'sprites.back_default', '')} alt="Pokemon Normal Back" />
              </div>
              <span>Normal Back</span>
            </div>
            <div className="pokemon-image-item">
              <div className="pokemon-image-item-img">
                <img src={get(pokemonDetail, 'sprites.front_shiny', '')} alt="Pokemon Shiny Front" />
              </div>
              <span>Shiny Front</span>
            </div>
            <div className="pokemon-image-item">
              <div className="pokemon-image-item-img">
                <img src={get(pokemonDetail, 'sprites.back_shiny', '')} alt="Pokemon Shiny Back" />
              </div>
              <span>Shiny Back</span>
            </div>
          </div>

          <div className="pokemon-info">
            <div className="pokemon-info-title">Types</div>
            <ul className="pokemon-info-list">
              {types.map((data, key) => (
                <li key={key} className="pokemon-info-type">{data.type.name.toUpperCase()}</li>
              ))}
            </ul>
          </div>

          <div className="pokemon-info">
            <div className="pokemon-info-title">Moves</div>  
            <ul className="pokemon-info-list">
              {moves.map((data, key) => (
                <li key={key} className="pokemon-info-moves">
                  {data.move.name.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          <div className="pokemon-info">
            <div className="pokemon-info-title">Abilility</div>  
            <ul className="pokemon-info-list">
              {abilility.map((data, key) => (
                <li key={key} className="pokemon-info-abilility">{data.ability.name.toUpperCase()}</li>
              ))}
            </ul>
          </div>

          <div className="pokemon-info">
            <div className="pokemon-info-title">Stats</div>  
            <ul className="pokemon-info-list">
              {stats.map((data, key) => (
                <li key={key} className="pokemon-info-stat">
                  {data.stat.name.toUpperCase()} 
                  <div className="pokemon-info-progress">
                    <ProgressBar animated now={data.base_stat} label={`${data.base_stat}%`}/>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button className="pokemon-catch" onClick={() => handleCatch()}>Catch the Pokemon</button>

          <PopupFailed 
            open={open} 
            message={message} 
            handleModal={handleModal} 
          />
          <PopupCatch 
            isCaught={isCaught} 
            message={message} 
            pokemonDetail={pokemonDetail}
            isExist={isExist}
            isNullName={isNullName}
            handleModal={handleModal} 
            handleSave={handleSave}
            handleNaming={handleNaming}
          />
        </div>
      )}
    </>
  );
};

export default PokemonDetail;