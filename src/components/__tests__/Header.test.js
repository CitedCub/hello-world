import React from "react";
import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header", function () {
  let mountedHeaderRenderer;
  beforeEach(() => {
    // Create Header component
    // mountedHeader = shallow(<Header />);
    mountedHeaderRenderer = renderer.create(<Header />);
  });

  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders a logo", () => {
    // const logoImg = mountedHeaderInstance.find(
    //   'img [src="images/wired-brain-coffee-logo.png"]'
    // );
    // expect(logoImg.length).toBe(1);
    const logoImg = mountedHeaderRenderer.root.findAll(
      (i) =>
        i.props.src == "images/wired-brain-coffee-logo.png" && i.type == "img"
    );
    expect(logoImg.length).toBe(1);

    // test("renders learn react link", () => {
    //   // Render the Header component and get hold of the getByText method
    //   const { getByText } = render(<Header />);
    //   // Call getByText to get the link element containing the text "learn react"
    //   const linkElement = getByText(/learn react/i);
    //   // Check that the link element exists in the document
    //   expect(linkElement).toBeInTheDocument();
  });
});
