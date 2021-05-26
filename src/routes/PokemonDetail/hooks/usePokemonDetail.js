import React, { useEffect, useState, useContext } from 'react';
import isEmpty from 'lodash/isEmpty';

import { getPokemonById } from '../../../models/pokemon';

import { GlobalContext } from '../../../context/GlobalState';

import LSHelper from '../../../helpers/LSHelper';

export const usePokemonDetail = props => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [pokemonTypes, setPokemonTypes] = useState({});
  const [loading, setLoading] = useState(true);
  const [isCaught, setIsCaught] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Failed to catch the Pokemon");
  const [pokeName, setPokeName] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [isNullName, setIsNullName] = useState(false);
  const { addMyPokemon, myPokemon } = useContext(GlobalContext);

  const handlePokemon = res => {
    if (res.status === 200) {
      setLoading(false);
      setPokemonDetail(res.data);
    } else {
      console.log('failed : ', res);
    }
  };

  const handleFetches = () => {
    const id = props.match.params.id;
    const promises = [getPokemonById(id)];

    Promise.all(promises)
      .then(async responses => {
        await handlePokemon(responses[0]);
      })
      .catch(err => {
        console.log('error : ', err);
      });
  };

  useEffect(() => {
    handleFetches();
  }, []);

  const handleRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const handleCatch = () => {
    if (open) { return };
    setOpen(true);
    if (handleRandomInt(2) === 1) {
      setOpen(false);
      setIsCaught(true);
      setMessage("Yesssssssss, You caught the Pokemon");
    }
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  const handleModal = isCaught => {
    setIsCaught(isCaught);
    setOpen(isCaught);
  };

  const handleValidation = () => {
    const pokemon = !isEmpty(myPokemon) ? myPokemon.find(item => item.myname === pokeName) : {};
    const isExist = isEmpty(pokemon) ? false : true;
    const isNullName = isEmpty(pokeName) ? true : false;

    setIsExist(isExist);
    setIsNullName(isNullName);

    return !isExist && !isNullName;
  };

  const handleSave = data => {
    const isValid = handleValidation();
    if (isValid) {
      setIsExist(false);
      const dataPokemon = {
        myname: pokeName,
        name: data.name,
        id: data.id,
        data: data
      };

      LSHelper.saveToLocalStorage(dataPokemon);
      addMyPokemon(dataPokemon);
      setIsCaught(false);
      setOpen(false);
      setIsNullName(false);
    }
  };

  const handleNaming = event => {
    setPokeName(event.target.value);
  };

  return {
    loading,
    pokemonDetail,
    open,
    isCaught,
    message,
    isExist,
    isNullName,
    handleCatch,
    handleModal,
    handleSave,
    handleNaming
  };
};

export default usePokemonDetail;