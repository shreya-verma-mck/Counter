import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "..";

describe("Counter", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should display the initial counter value as 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterValue = getByTestId("counterValue");
    expect(counterValue).toHaveTextContent(0);
  });
  it("should increment the counter value by 1 when the plus button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const plusButton = getByTestId("plusButton");
    fireEvent.click(plusButton);
    const counterValue = getByTestId("counterValue");
    expect(counterValue).toHaveTextContent(1);
  });
  it("should decrement the counter value by 1 when the minus icon is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const minusButton = getByTestId("minusButton");
    fireEvent.click(minusButton);
    const counterValue = getByTestId("counterValue");
    expect(counterValue).toHaveTextContent(-1);
  });
});
