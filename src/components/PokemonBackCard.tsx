import React from "react";
import { PokemonBackCardProps } from "./types";
import { CardWrapper, StatWrapper } from "./styles";
import { AttacksTable } from "./AttacksTable";
import { MaxStatBox } from "./MaxStatBox";

export const PokemonBackCard = ({
  onClick,
  attacks,
  maxCP,
  maxHP
}: PokemonBackCardProps) => {
  return (
    <CardWrapper onClick={onClick}>
      <StatWrapper>
        <MaxStatBox text="MAX CP" value={maxCP} />
        <MaxStatBox text="MAX HP" value={maxHP} />
      </StatWrapper>
      <AttacksTable title="Fast Attacks" attacks={attacks.fast} />
      <AttacksTable title="Special Attacks" attacks={attacks.special} />
    </CardWrapper>
  );
};
