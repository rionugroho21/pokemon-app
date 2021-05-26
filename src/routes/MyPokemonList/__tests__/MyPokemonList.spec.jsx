import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MyPokemonList from '../index';

const props = {
  handleDelete: jest.fn(),
  handleDeleteAll: jest.fn()
};

describe('MyPokemonList Page', () => {
  afterEach(cleanup);

  it('should render page correctly', () => {
    const { asFragment } = render(<MyPokemonList {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});