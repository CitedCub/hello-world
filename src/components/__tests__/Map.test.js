import React from "react";
// import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import Map from "../Map";

describe("Map", function () {
  // let mountedMap;
  let mountedMapRenderer;
  beforeEach(() => {
    // mountedMap = shallow(<Map />);
    mountedMapRenderer = renderer.create(<Map />);
  });

  it("renders without crashing", () => {
    // let mountedMap = shallow(<Map />);
    let mountedMapRenderer = renderer.create(<Map />);
  });

  it("contains an image", () => {
    // const img = mountedMap.find("img");
    // expect(img).to.have.lengthOf(1);
    // expect(mountedMap.find("img")).toBe(1);
    expect(mountedMapRenderer.root.findAllByType("img").length).toBe(1);
  });

  // it("displays the none map when no params are given", () => {
  //   const defaultMap = mountedMap.find('img [src="images/none.png"]');
  //   expect(defaultMap.length).toBe(1);
  // });
});
