import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokemonCard } from "../PokemonCard";

const props = {
  attacks: {
    fast: [
      {
        damage: 12,
        name: "fast-attack-1",
        type: "Normal"
      }
    ],
    special: [
      {
        damage: 12,
        name: "special-attack-1",
        type: "Normal"
      }
    ]
  },
  maxCP: 123,
  maxHP: 123,
  name: "bulbasaur",
  number: "001",
  types: ["Gras,poison"]
};

describe("<PokemonCard />", () => {
  it("matches the snapshot", () => {
    const wrapper = render(<PokemonCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("initially should display the front card containning the pokemon image", () => {
    const { getByAltText } = render(<PokemonCard {...props} />);
    expect(getByAltText(`pokemon ${props.name}`)).toBeTruthy();
  });
  it("clicking on the pokemon should toggle the front and back cards", () => {
    const { getByAltText, container, getByText } = render(
      <PokemonCard {...props} />
    );
    const frontCard = getByAltText(`pokemon ${props.name}`);
    expect(frontCard).toBeTruthy();
    fireEvent.click(frontCard, container);
    const backCard = getByText("MAX CP");
    expect(backCard).toBeTruthy();
  });
});
