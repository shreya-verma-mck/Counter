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
    const counterValue = getByTestId("counter-value");
    expect(counterValue).toHaveTextContent(0);
  });
  it("should increment the counter value by 1 when the plus button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const plusButton = getByTestId("plus-button");
    fireEvent.click(plusButton);
    const counterValue = getByTestId("counter-value");
    expect(counterValue).toHaveTextContent(1);
  });
  it("should decrement the counter value by 1 when the counter value is greater than 1 and minus icon is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const plusButton = getByTestId("plus-button");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    const minusButton = getByTestId("minus-button");
    fireEvent.click(minusButton);
    const counterValue = getByTestId("counter-value");
    expect(counterValue).toHaveTextContent(1);
  });
  it("should not decrement the counter value by 1 when the counter value is 0 and the minus icon is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const minusButton = getByTestId("minus-button");
    fireEvent.click(minusButton);
    const counterValue = getByTestId("counter-value");
    expect(counterValue).toHaveTextContent(0);
  });
});
