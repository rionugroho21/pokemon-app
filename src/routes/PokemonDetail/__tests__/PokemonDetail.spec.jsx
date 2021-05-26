import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PokemonDetail from '../index';

const props = {
  loading: false,
  pokemonDetail: {},
  open: false,
  isCaught: false,
  message: 'Failed to catch the Pokemon',
  isExist: false,
  handleCatch: jest.fn(),
  handleModal: jest.fn(),
  handleSave: jest.fn(),
  handleNaming: jest.fn(),
  match: {
    params: {
      id: '1'
    }
  }
};

describe('PokemonDetail Page', () => {
  afterEach(cleanup);

  it('should render page correctly', () => {
    const { asFragment } = render(<PokemonDetail {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});