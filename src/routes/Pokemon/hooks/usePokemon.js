import React, { useEffect, useState, useContext } from 'react';

import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import get from 'lodash/get';

import { getPokemon, gotoNextPrev } from '../../../models/pokemon';

import { GlobalContext } from '../../../context/GlobalState';

import LSHelper from '../../../helpers/LSHelper';
import filterHelper from '../../../helpers/filterHelper';

export const usePokemon = props => {
  const [listPokemon, setListPokemon] = useState([]);
  const [nextPageUrl , setNextPageUrl] = useState("");
  const [prevPageUrl , setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const { myPokemon } = useContext(GlobalContext);

  const handlePokemon = res => {
    if (res.status === 200) {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setListPokemon(res.data.results);
    } else {
      console.log('failed : ', res);
    }
  };

  const handleNextPrevPage = url => {
    if (url !== null) {
      gotoNextPrev(url)
        .then(async responses => {
          await handlePokemon(responses);
        })
        .catch(err => {
          console.log('error : ', err);
        });
    }
  };

  const gotoNextPage = url => {
    handleNextPrevPage(url);
  };

  const gotoPrevPage = url => {
    handleNextPrevPage(url);
  };

  const handleFetches = () => {
    const promises = [getPokemon()];

    Promise.all(promises)
      .then(async responses => {
        await handlePokemon(responses[0]);
      })
      .catch(err => {
        console.log('error : ', err);
      })
  };

  useEffect(() => {
    handleFetches();
  }, []);

  const handleCheckOwned = name => {
    const dataLocalStorage = LSHelper.getLocalStorage();
    const owned = !isEmpty(dataLocalStorage) 
      ? filterHelper.filterByName(dataLocalStorage, name) 
      : !isEmpty(myPokemon) 
        ? filterHelper.filterByName(myPokemon, name)
        : [];

    return owned.length;
  };

  return {
    loading,
    listPokemon,
    nextPageUrl,
    prevPageUrl,
    gotoNextPage,
    gotoPrevPage,
    handleCheckOwned
  };
};

export default usePokemon;