import React from "react";
import { StatValue, StatBoxWrapper } from "./styles";
import { StatProps } from "./types";

export const MaxStatBox = ({ text, value }: StatProps) => (
  <StatBoxWrapper>
    {text}
    <StatValue>{value}</StatValue>
  </StatBoxWrapper>
);
