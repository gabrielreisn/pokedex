import React from "react";
import { TypeTag } from "./TypeTag";
import { imageUrlFromPokemonId } from "../utils";
import {
  ImageWrapper,
  CardWrapper,
  Trapeizoid,
  TagWrapper,
  NameWrapper,
  NumberWrapper,
  ContentBox
} from "./styles";

type Props = {
  onClick: () => void;
  number: number;
  name: string;
  types: [string];
};

export const PokemonFrontCard = ({ number, name, types, onClick }: Props) => {
  return (
    <CardWrapper onClick={onClick}>
      <ImageWrapper
        src={imageUrlFromPokemonId(number)}
        alt={`pokemon ${name}`}
      />
      <Trapeizoid>
        <NumberWrapper>#{number}</NumberWrapper>
      </Trapeizoid>
      <ContentBox>
        <TagWrapper>
          {types.map(value => (
            <TypeTag value={value} />
          ))}
        </TagWrapper>
        <NameWrapper>{name}</NameWrapper>
      </ContentBox>
    </CardWrapper>
  );
};
