import React from "react";
import { queryVariables, pokemon } from "./types";

import query from "../graphql/pokemonQuery";

import { PokemonCard } from "../components/PokemonCard";


import { useQuery } from 'urql';

const FETCH_FIRST_N_POKEMONS: number = 151;

const variables: queryVariables = {
  first: FETCH_FIRST_N_POKEMONS
};

export const PokemonContainer: React.FC = () => {
  const [result] = useQuery({
    query: query,
    variables: variables
  });
  
  const { data, fetching, error } = result;
  
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    data && data.pokemons.map(
      ({ number, name, types, attacks, maxCP, maxHP }: pokemon) => (
        <PokemonCard
          number={number}
          name={name}
          types={types}
          attacks={attacks}
          maxCP={maxCP}
          maxHP={maxHP}
        />
      )
    )
  );
};
