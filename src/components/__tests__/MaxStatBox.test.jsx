import React from "react";
import { render } from "@testing-library/react";
import { MaxStatBox } from "../MaxStatBox";

const props = {
  text: "max cp",
  value: 456
};

describe("<MaxStatBox />", () => {
  it("matches the snapshot", () => {
    const wrapper = render(<MaxStatBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
