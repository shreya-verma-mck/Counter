import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "..";

describe("Counter", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should display the counter value as 0 when the page is loaded", () => {
    const { queryByText } = render(<Counter />);
    expect(queryByText(0)).toBeTruthy();
  });
  it("should increment the counter value by 1 when the plus button is clicked", () => {
    const { getByText, queryByText } = render(<Counter />);
    expect(queryByText("1")).toBeFalsy();
    const plusButton = getByText("+");
    fireEvent.click(plusButton);
    expect(queryByText("1")).toBeTruthy();
  });
  it("should decrement the counter value by 1 when the counter value is greater than 1 and minus button is clicked", () => {
    const { getByText, queryByText } = render(<Counter />);
    const plusButton = getByText("+");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(queryByText("2")).toBeFalsy();
    const minusButton = getByText("-");
    fireEvent.click(minusButton);
    expect(queryByText("2")).toBeTruthy();
  });
  it("should not decrement the counter value by 1 when the counter value is 0 and the minus button is clicked", () => {
    const { getByText, queryByText } = render(<Counter />);
    const minusButton = getByText("-");
    fireEvent.click(minusButton);
    expect(queryByText("0")).toBeTruthy();
  });
});
