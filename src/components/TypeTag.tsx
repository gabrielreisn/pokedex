import React from "react";
import styled from "styled-components";
import { pokemonTagType } from "../utils";

type tagProps = { value: string };

const Tag = styled.span`
  background: ${props => props.color};
  border-radius: 3px;
  padding: 1px 3px;
  margin: 0 3px;
`;

export const TypeTag = ({ value }: tagProps) => (
  <Tag color={pokemonTagType(value)}>{value}</Tag>
);
