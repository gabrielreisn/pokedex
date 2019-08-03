import React from "react";
import styled from "styled-components";
import { TypeTag } from "./TypeTag";
import { imageUrlFromPokemonId } from "../utils";

type Props = {
  number: number;
  name: string;
  types: [string];
};

const ImageWrapper = styled.img`
  width: 100px;
  align-self: center;
  margin: 30px;
  min-width: 100px;
`;

const CardWrapper = styled.div`
  background: rgba(169, 178, 186, 0.2);
  width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  border-radius: 8px;
  border: 1px solid rgba(169, 178, 186, 0.5);
`;

const Trapeizoid = styled.div`
  position: relative;
  border-bottom: 20px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 60px;
  align-self: center;
  text-align: center;
`;

const TagWrapper = styled.div`
  align-self: flex-start;
  margin: 5px 10px;
`;

const NameWrapper = styled.div`
  align-self: flex-start;
  margin: 0 10px;
  font-weight: 500;
`;

const NumberWrapper = styled.span`
  position: relative;
  top: 4px;
  font-weight: 600;
  color: gray;
`;

const ContentBox = styled.div`
  height: 100%;
  background: white;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  padding: 0 0 10px 0;
`;

export const PokemonFrontCard = ({ number, name, types }: Props) => {
  return (
    <CardWrapper>
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
