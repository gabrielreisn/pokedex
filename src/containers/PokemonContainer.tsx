import React from "react";
import { Query } from "react-apollo";
import { queryVariables, queryResult, pokemon } from "./types";
import { SplitClient } from "../utils/splitClient";
import query from "../graphql/pokemonQuery";

import { PokemonCard } from "../components/PokemonCard";

const FETCH_FIRST_N_POKEMONS: number = 151;

const variables: queryVariables = {
  first: FETCH_FIRST_N_POKEMONS
};

const getRandomNumberToString = () =>
  Math.floor(Math.random() * 100).toString();

const filterTypes = (type: string, arr: [pokemon]) =>
  arr.filter(el => el.types.includes(type));

export const PokemonContainer: React.FC = () => {
  const [abTreatment, setTreatment] = React.useState("");

  React.useEffect(() => {
    const attributes = {
      user_agent: navigator.userAgent,
      language: navigator.language
    };

    const client = SplitClient('getRandomNumberToString()');
    client.on(client.Event.SDK_READY, () => {
      const treatment = client.getTreatment("meetup_demo_split", attributes);
      setTreatment(treatment);
    });
  });

  return (
    <Query<queryResult, queryVariables> query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        if (abTreatment === "option-A" && data)
          return filterTypes("Water", data.pokemons).map(
            ({ number, name, types, attacks, maxCP, maxHP }: pokemon) => (
              <PokemonCard
                key={`${number}-${name}`}
                number={number}
                name={name}
                types={types}
                attacks={attacks}
                maxCP={maxCP}
                maxHP={maxHP}
              />
            )
          );

        if (abTreatment === "option-B" && data)
          return filterTypes("Fire", data.pokemons).map(
            ({ number, name, types, attacks, maxCP, maxHP }: pokemon) => (
              <PokemonCard
                key={`${number}-${name}`}
                number={number}
                name={name}
                types={types}
                attacks={attacks}
                maxCP={maxCP}
                maxHP={maxHP}
              />
            )
          );
        return (
          data &&
          data.pokemons.map(
            ({ number, name, types, attacks, maxCP, maxHP }: pokemon) => (
              <PokemonCard
                key={`${number}-${name}`}
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
