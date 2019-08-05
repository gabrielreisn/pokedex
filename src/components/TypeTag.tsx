import React from "react";
import { Tag } from "./styles";
import { TypeTagProps } from "./types";
import { pokemonTagType } from "../utils";

export const TypeTag = ({ value }: TypeTagProps) => (
  <Tag color={pokemonTagType(value)}>{value}</Tag>
);
