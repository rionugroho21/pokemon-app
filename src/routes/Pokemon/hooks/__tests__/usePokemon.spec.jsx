import { renderHook, act } from '@testing-library/react-hooks';

import usePokemon from '../usePokemon';

import * as service from '../../../../models/pokemon';

describe('usePokemon Hook', () => {
  it('Should gotoNextPage', () => {
    const gotoNextPrev = jest.spyOn(service, 'gotoNextPrev');
    const { result } = renderHook(() => usePokemon());

    act(() => {
      result.current.gotoNextPage("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
    });

    expect(gotoNextPrev).toHaveBeenCalledTimes(1);
  });

  it('Should gotoPrevPage', () => {
    const gotoNextPrev = jest.spyOn(service, 'gotoNextPrev');
    const { result } = renderHook(() => usePokemon());

    act(() => {
      result.current.gotoPrevPage(null);
    });

    expect(gotoNextPrev).toHaveBeenCalledTimes(0);
  });
});