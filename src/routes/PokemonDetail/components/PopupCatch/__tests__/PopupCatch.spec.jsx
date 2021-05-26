import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PopupCatch from '../PopupCatch';

const props = {
  isCaught: false,
  message: 'Failed to catch the Pokemon',
  pokemonDetail: {},
  isExist: false,
  handleModal: jest.fn(),
  handleSave: jest.fn(),
  handleNaming: jest.fn()
};

describe('PopupCatch Page', () => {
  afterEach(cleanup);

  it('should render page correctly', () => {
    const { asFragment } = render(<PopupCatch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});