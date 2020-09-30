import React from "react";
import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import App from "../App";

describe("App", function () {
  it("renders without crashing", () => {
    let mountedApp = shallow(<App />);
  });

  it("renders a StoreLocator", () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");
    expect(locators.length).toBe(1);
  });
});
