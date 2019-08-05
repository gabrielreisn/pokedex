import React from "react";

import styled from "styled-components";

type StatProps = {
  text: string;
  value: number;
};

const StatValue = styled.div`
  color: black;
  font-size: 14px;
  text-align: center;
`;

const StatWrapper = styled.div`
  background: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  width: 70px;
  border-radius: 6px;
  text-align: left;
  padding: 5px;
  color: gray;
`;

export const MaxStatBox = ({ text, value }: StatProps) => (
  <StatWrapper>
    {text}
    <StatValue>{value}</StatValue>
  </StatWrapper>
);
