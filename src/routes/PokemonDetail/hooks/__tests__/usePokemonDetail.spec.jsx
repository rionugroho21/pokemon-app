import { renderHook, act } from '@testing-library/react-hooks';

import usePokemonDetail from '../usePokemonDetail';

const mockProps = {
  match: {
    params: {
      id: 1
    }
  }
};

describe('usePokemonDetail Hook', () => {
  it('Should handle modal properly', () => {
    const { result } = renderHook(() => usePokemonDetail(mockProps));

    act(() => {
      result.current.handleModal(true);
    });

    expect(result.current.isCaught).toEqual(true);
    expect(result.current.open).toEqual(true);
  });
});