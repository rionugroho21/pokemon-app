import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PopupFailed from '../PopupFailed';

const props = {
  open: false,
  message: 'Failed to catch the Pokemon',
  handleModal: jest.fn()
};

describe('PopupFailed Page', () => {
  afterEach(cleanup);

  it('should render page correctly', () => {
    const { asFragment } = render(<PopupFailed {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});