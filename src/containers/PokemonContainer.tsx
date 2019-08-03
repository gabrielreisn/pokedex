import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { queryVariables, queryResult } from "./types";
import { client } from "../graphql";
import query from "../graphql/pokemonQuery";

import { PokemonFrontCard } from "../components/PokemonFrontCard";

const FETCH_FIRST_N_POKEMONS: number = 15;

const variables: queryVariables = {
  first: FETCH_FIRST_N_POKEMONS
};

export const PokemonContainer: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Query<queryResult, queryVariables> query={query} variables={variables}>
        {({ loading, error, data }: any) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.pokemons.map(({ number, name, types }: any) => (
            <PokemonFrontCard number={number} name={name} types={types} />
          ));
        }}
      </Query>
    </ApolloProvider>
  );
};
