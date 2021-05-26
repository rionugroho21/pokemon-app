import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Pokemon from '../index';

const props = {
  loading: false,
  listPokemon: [],
  nextPageUrl: jest.fn(),
  prevPageUrl: jest.fn(),
  gotoNextPage: jest.fn(),
  gotoPrevPage: jest.fn(),
  handleCheckOwned: jest.fn()
};

describe('Pokemon Page', () => {
  afterEach(cleanup);

  it('should render page correctly', () => {
    const { asFragment } = render(<Pokemon {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});