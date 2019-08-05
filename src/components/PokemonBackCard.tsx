import React from "react";
import { CardWrapper } from "./styles";
import { AttacksTable } from "./AttacksTable";
import { MaxStatBox } from "./MaxStatBox";
import { pokemon } from "../containers/types";

import styled from "styled-components";

type Props = {
  onClick: () => void;
  attacks: pokemon["attacks"];
  maxCP: number;
  maxHP: number;
};

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const PokemonBackCard = ({ onClick, attacks, maxCP, maxHP }: Props) => {
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
