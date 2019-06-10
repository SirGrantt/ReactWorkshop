import React from "react";
import TodoList from "./TodoList";
import { shallow } from "enzyme";

const props = {
  title: "test",
  todos: [
    {
      title: "testing",
      complete: false,
      id: 1
    },
    {
      title: "testing again",
      complete: true,
      id: 2
    }
  ],
  setComplete: jest.fn(),
  removeTodo: jest.fn()
};

describe("given a TodoList component", () => {
  it("should render an item for each todo item is is passed", () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.find("ul").children().length).toEqual(2);
  });

  it("should render the title as an h1 that it is passed", () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.find("h1").text()).toEqual("test");
  });
});
