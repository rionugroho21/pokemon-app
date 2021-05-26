import Layout from '../components/Layout';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';
import MyPokemonList from './MyPokemonList';

export default [{
  component: Layout,
  routes: [
    {
      path: "/",
      exact: true,
      component: Pokemon
    },
    {
      path: "/pokemon/:id",
      exact: true,
      component: PokemonDetail
    },
    {
      path: "/mypokemon",
      exact: true,
      component: MyPokemonList
    }
  ]
}];
