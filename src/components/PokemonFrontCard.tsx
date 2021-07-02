import React from "react";
import { TypeTag } from "./TypeTag";
import { PokemonFrontCardProps } from "./types";
import { imageUrlFromPokemonId } from "../utils";
import {
  ImageWrapper,
  CardWrapper,
  Trapezoid,
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
        loading="lazy"
        src={imageUrlFromPokemonId(number)}
        alt={`pokemon ${name}`}
      />
      <Trapezoid>
        <NumberWrapper>#{number}</NumberWrapper>
      </Trapezoid>
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
