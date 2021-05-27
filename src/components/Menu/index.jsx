import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pokemonLogo from '../../assets/images/pokeapi.png';
import './styles.scss';

class Aside extends Component{
  render() {
    return (
      <div className="menu">
        <div className="menu-wrap">
          <h1 className="menu-logo"><Link to="/"><img src={pokemonLogo} alt="Pokemon app logo" width="85" /></Link></h1>
          <nav className="menu-link">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mypokemon">My Pokemon</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Aside;
