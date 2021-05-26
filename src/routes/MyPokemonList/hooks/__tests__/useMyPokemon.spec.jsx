import { renderHook, act } from '@testing-library/react-hooks';
import { render, fireEvent, screen } from '@testing-library/react';

import useMyPokemon from '../useMyPokemon';

import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../../../../context/GlobalState';
import { MyPokemonList } from '../../index';

describe('useMyPokemon Hook', () => {
  it('Should handleDelete', () => {
    const deleteMyPokemon = jest.fn();
    const myPokemon = [
      { id: 1, myname: 'Satu', name: 'bulbasaur', data: {} }
    ];

    render(
      <GlobalContext.Provider value={{ deleteMyPokemon, myPokemon }}>
        <BrowserRouter>
          <MyPokemonList />
        </BrowserRouter>
      </GlobalContext.Provider>
    )
    fireEvent.click(screen.getByText(/x/))
    expect(deleteMyPokemon).toHaveBeenCalledTimes(1)
  });

  it('Should handleDeleteAll', () => {
    const deleteAllMyPokemon = jest.fn();
    const myPokemon = [
      { id: 1, myname: 'Satu', name: 'bulbasaur', data: {} }
    ];

    render(
      <GlobalContext.Provider value={{ deleteAllMyPokemon, myPokemon }}>
        <BrowserRouter>
          <MyPokemonList />
        </BrowserRouter>
      </GlobalContext.Provider>
    )
    fireEvent.click(screen.getByText(/Delete All Pokemon/))
    expect(deleteAllMyPokemon).toHaveBeenCalledTimes(1)
  });
});