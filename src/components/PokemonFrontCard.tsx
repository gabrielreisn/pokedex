import React from "react";
import { imageUrlFromPokemonId, pokemonTagType } from "../utils";

type Props = {
  number: number;
  name: string;
  types: [string];
};

type tagProps = { value: string };

const TypeTag = ({ value }: tagProps) => (
  <span
    style={{
      background: pokemonTagType(value),
      borderRadius: "3px",
      padding: "1px 3px",
      margin: "0 3px"
    }}
  >
    {value}
  </span>
);

export const PokemonFrontCard = ({ number, name, types }: Props) => {
  return (
    <div
      style={{
        background: "rgba(169, 178, 186,0.2)",
        width: "200px",
        height: "270px",
        display: "flex",
        flexDirection: "column",
        margin: "50px auto",
        borderRadius: "8px",
        border: "1px solid rgba(169, 178, 186, 0.5)"
      }}
    >
      <img
        src={imageUrlFromPokemonId(number)}
        alt={`pokemon ${name}`}
        style={{
          width: "100px",
          alignSelf: "center",
          margin: "30px",
          minWidth: "100px"
        }}
      />
      <div
        id="trap"
        style={{
          position: "relative",
          borderBottom: "20px solid white",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          height: 0,
          width: "60px",
          alignSelf: "center",
          textAlign: "center"
        }}
      >
        <span
          style={{
            position: "relative",
            top: "4px",
            fontWeight: 600,
            color: "gray"
          }}
        >
          #{number}
        </span>
      </div>
      <div
        style={{
          height: "100%",
          background: "white",
          borderRadius: "0 0 8px 8px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column-reverse",
          padding: "0 0 10px 0"
        }}
      >
        <div
          style={{ alignSelf: "flex-start", margin: "0 10px", fontWeight: 500 }}
        >
          {name}
        </div>
        <div style={{ alignSelf: "flex-start", margin: "5px 10px" }}>
          {types.map(value => (
            <TypeTag value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};
