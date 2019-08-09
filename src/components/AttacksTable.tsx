import React from "react";
import {
  Table,
  TableBody,
  AttackTitle,
  AttackName,
  AttackLabel
} from "./styles";
import { TypeTag } from "./TypeTag";
import { AttacksTableProps, AttackType } from "./types";

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
          <tr key={`${el.name} - ${el.damage}`}>
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
