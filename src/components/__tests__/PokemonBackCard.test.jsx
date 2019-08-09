import React from "react";
import { render } from "@testing-library/react";
import { PokemonBackCard } from "../PokemonBackCard";

const props = {
  onClick: jest.fn(),
  attacks: {
    fast: [
      {
        damage: 123,
        name: "foo",
        type: "Grass"
      }
    ],
    special: [
      {
        damage: 123,
        name: "bar",
        type: "Normal"
      }
    ]
  },
  maxCP: 123,
  maxHP: 123
};

describe("<PokemonBackCard />", () => {
  it("matches the snapshot", () => {
    const wrapper = render(<PokemonBackCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
