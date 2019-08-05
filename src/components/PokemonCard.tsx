import React from "react";
import { PokemonCardProps } from "./types";
import { PokemonFrontCard } from "./PokemonFrontCard";
import { PokemonBackCard } from "./PokemonBackCard";

export const PokemonCard = ({
  number,
  name,
  types,
  attacks,
  maxCP,
  maxHP
}: PokemonCardProps) => {
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
