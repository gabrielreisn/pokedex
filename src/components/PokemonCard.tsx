import React from "react";
import { PokemonFrontCard } from "./PokemonFrontCard";
import { PokemonBackCard } from "./PokemonBackCard";
import { pokemon } from "../containers/types";

type Props = {
  number: number;
  name: string;
  types: [string];
  attacks: pokemon["attacks"];
  maxCP: number;
  maxHP: number;
};

export const PokemonCard = ({
  number,
  name,
  types,
  attacks,
  maxCP,
  maxHP
}: Props) => {
  const [cardFace, toggleCard] = React.useState(true);

  const clickToggle = () => toggleCard(!cardFace);

  return cardFace ? (
    <PokemonFrontCard
      number={number}
      name={name}
      types={types}
      onClick={clickToggle}
    />
  ) : (
    <PokemonBackCard
      onClick={clickToggle}
      attacks={attacks}
      maxCP={maxCP}
      maxHP={maxHP}
    />
  );
};
