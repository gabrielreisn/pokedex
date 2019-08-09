import React from "react";
import { render } from "@testing-library/react";
import { AttacksTable } from "../AttacksTable";

const props = {
  attacks: [
    {
      damage: 12,
      name: "fast-attack-1",
      type: "Normal"
    },
    {
      damage: 123,
      name: "fast-attack-2",
      type: "Normal"
    },
    {
      damage: 1234,
      name: "fast-attack-3",
      type: "Normal"
    }
  ],
  title: "Fast Attacks"
};

describe("<AttacksTable />", () => {
  it("matches the snapshot", () => {
    const wrapper = render(<AttacksTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("has two normal type tag attacks", () => {
    const { getAllByText } = render(<AttacksTable {...props} />);
    const normalTypeAttack = getAllByText("Normal");
    expect(normalTypeAttack).toHaveLength(3);
  });
});
