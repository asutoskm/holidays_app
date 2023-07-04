import MonthSelect from "@/components/MonthSelect";
import { render, screen, fireEvent } from "@testing-library/react";

describe("MonthSelect", () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    render(<MonthSelect onSelect={mockOnSelect} />);
  });

  test("renders MonthSelect component", () => {
    const labelElement = screen.getByLabelText(/Month/i);
    const selectElement = screen.getByRole("combobox");

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  test("calls onSelect function when a month is selected", () => {
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "2" } });

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(2);
  });
});
