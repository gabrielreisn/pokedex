import React from "react";
import styled from "styled-components";
import { TypeTag } from "./TypeTag";

type AttacksTableProps = {
  title: string;
  attacks: Array<AttackType>;
};

type AttackType = {
  damage: number;
  name: string;
  type: string;
};

const Table = styled.table`
  margin: 10px 5px;
`;

const TableBody = styled.tbody`
  font-size: 12px;
`;

const AttackTitle = styled.span`
  text-align: left;
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
`;

const AttackName = styled.td`
  text-align: left;
`;
const AttackLabel = styled.th`
  text-align: left;
`;

export const AttacksTable = ({ title, attacks }: AttacksTableProps) => (
  <React.Fragment>
    <AttackTitle>{title}</AttackTitle>
    <Table>
      <thead>
        <tr>
          <AttackLabel>Attack</AttackLabel>
          <th>Type</th>
          <th>Power</th>
        </tr>
      </thead>
      <TableBody>
        {attacks.map((el: AttackType) => (
          <tr>
            <AttackName>{el.name}</AttackName>
            <td>
              <TypeTag value={el.type} />
            </td>
            <td>{el.damage}</td>
          </tr>
        ))}
      </TableBody>
    </Table>
  </React.Fragment>
);
