import React from "react";
import { render } from "@testing-library/react";
import { TypeTag } from "../TypeTag";

const props = {
  value: "Normal"
};

describe("<TypeTag />", () => {
  it("matches the snapshot", () => {
    const wrapper = render(<TypeTag {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
