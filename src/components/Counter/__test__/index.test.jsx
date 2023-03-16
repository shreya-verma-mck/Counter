import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Counter from '..';

describe('Counter', () => {
  it('should show 0 value when it renders initially', () => {
    render(<Counter />);
    expect(screen.queryByText(0)).toBeTruthy();
  });
  it('should increase the counter value by 1 when increment button is clicked', () => {
    render(<Counter />);
    expect(screen.queryByText(1)).toBeFalsy();
    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.queryByText(1)).toBeTruthy();
  });
  it('should decrease the counter value by 1 when decrement button is clicked and the value is greater than 0', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.queryByText(0)).toBeFalsy();
    fireEvent.click(screen.getByTestId('decrement'));
    expect(screen.queryByText(0)).toBeTruthy();
  });

  it('should have the counter value as 0 when decrement button is clicked and the value is 0', () => {
    render(<Counter />);
    expect(screen.queryByText(0)).toBeTruthy();
    fireEvent.click(screen.getByTestId('decrement'));
    expect(screen.queryByText(0)).toBeTruthy();
  });

  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
