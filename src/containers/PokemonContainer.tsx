import React from "react";
import { Query } from "react-apollo";
import { queryVariables, queryResult, pokemon } from "./types";

import query from "../graphql/pokemonQuery";

import { PokemonCard } from "../components/PokemonCard";

const FETCH_FIRST_N_POKEMONS: number = 151;

const variables: queryVariables = {
  first: FETCH_FIRST_N_POKEMONS
};

export const PokemonContainer: React.FC = () => {
  return (
    <Query<queryResult, queryVariables> query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          data &&
          data.pokemons.map(
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
      }}
    </Query>
  );
};
