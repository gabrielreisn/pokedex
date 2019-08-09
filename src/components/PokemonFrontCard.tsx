import React from "react";
import { TypeTag } from "./TypeTag";
import { PokemonFrontCardProps } from "./types";
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

export const PokemonFrontCard = ({
  number,
  name,
  types,
  onClick
}: PokemonFrontCardProps) => {
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
          {types.map((value, i) => (
            <TypeTag key={`${value} - ${i}`} value={value} />
          ))}
        </TagWrapper>
        <NameWrapper>{name}</NameWrapper>
      </ContentBox>
    </CardWrapper>
  );
};
