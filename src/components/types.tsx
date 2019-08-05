import { pokemon } from "../containers/types";

export type AttacksTableProps = {
  title: string;
  attacks: Array<AttackType>;
};

export type AttackType = {
  damage: number;
  name: string;
  type: string;
};

export type StatProps = {
  text: string;
  value: number;
};

export type PokemonBackCardProps = {
  onClick: () => void;
  attacks: pokemon["attacks"];
  maxCP: number;
  maxHP: number;
};

export type PokemonCardProps = {
  number: number;
  name: string;
  types: [string];
  attacks: pokemon["attacks"];
  maxCP: number;
  maxHP: number;
};

export type PokemonFrontCardProps = {
  onClick: () => void;
  number: number;
  name: string;
  types: [string];
};

export type TypeTagProps = { value: string };
