import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { queryVariables, queryResult } from "./types";
import { client } from "../graphql";
import query from "../graphql/pokemonQuery";

const FETCH_FIRST_N_POKEMONS: number = 1;

const variables: queryVariables = {
  first: FETCH_FIRST_N_POKEMONS
};

export const PokemonContainer: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Query<queryResult, queryVariables> query={query} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return <div>foo</div>;
        }}
      </Query>
    </ApolloProvider>
  );
};
