import filter from 'lodash/filter';
import get from 'lodash/get';

const filterByName = (data, name) => {
  const pokemon = filter(data, item => {
    const getName = get(item, 'name', '');

    return getName === name;
  });

  return pokemon;
};

export default {
  filterByName
};