import React from "react";
import { render } from "@testing-library/react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
// import ReactDOM from "react-dom";
import Button from "../Button";

describe("Button", function () {
  // let mountedButton;
  let mountedButtonRenderer;

  beforeEach(() => {
    // mountedButton = shallow(<Button />);
    mountedButtonRenderer = renderer.create(<Button />);
  });

  it("renders without crashing", () => {
    // mountedButton = shallow(<Button />);
    mountedButtonRenderer = renderer.create(<Button />);
  });

  it("renders a button", () => {
    // const button = mountedButton.find("button");
    // expect(button.length).toBe(1);
    const button = mountedButtonRenderer.root.findAllByType("button");
    expect(button.length).toBe(1);
  });
});

describe("When a location is passed to it", () => {
  // let mountedButton;
  let mountedButtonRenderer;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1",
    };

    // mountedButton = shallow(<Button {...props} />);
    mountedButtonRenderer = renderer.create(<Button {...props} />);
  });

  it("displays the location", () => {
    // const locName = mountedButton.find(".location-button");
    // expect(locName.text()).toEqual("Location1");
    const locName = mountedButtonRenderer.root.find(
      (i) => i.props.className == "location-button"
    );
    expect(locName.props.children).toEqual("Location1");
  });
});

describe("When no location is passed to it", () => {
  // let mountedButton;
  let mountedButtonRenderer;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
    };

    // mountedButton = shallow(<Button {...props} />);
    mountedButtonRenderer = renderer.create(<Button {...props} />);
  });

  it("displays all locations", () => {
    // const locName = mountedButton.find(".location-button");
    // expect(locName.text()).toEqual("All Locations");
    const locName = mountedButtonRenderer.root.find(
      (i) => i.props.className == "location-button"
    );
    expect(locName.props.children).toEqual("All Locations");
  });
});
