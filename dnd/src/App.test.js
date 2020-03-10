import React from "react";
import App from "./App";
import { mount } from "enzyme";

describe("Testing href", () => {
  it("Testing href", () => {
    const wrapper = mount(<App />);
    console.log(wrapper.find("div").getElement());
    //expect(wrapper.find("div")).toBeOfLength(1);
  });
});
