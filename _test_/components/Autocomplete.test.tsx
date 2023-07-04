import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Autocomplete, { IAutocompleteProps } from "@/components/Autocomplete";

describe("Autocomplete", () => {
  let props: IAutocompleteProps;
  let onOptionClick: jest.Mock;

  beforeEach(() => {
    onOptionClick = jest.fn();
    props = {
      defaultcountry: "US", // Update the defaultcountry to match the key in the options object
      onOptionClick,
    };
  });

  it("should render the Autocomplete component", () => {
    render(<Autocomplete {...props} />);
    const inputElement = screen.getByPlaceholderText("Type country name");
    expect(inputElement).toBeInTheDocument();
  });

  it("should set the default country", () => {
    render(<Autocomplete {...props} />);
    const inputElement = screen.getByPlaceholderText("Type country name");
    expect(inputElement).toHaveAttribute("value", "US");
  });

  it("should update the value when input changes", () => {
    render(<Autocomplete {...props} />);
    const inputElement = screen.getByPlaceholderText("Type country name");
    fireEvent.change(inputElement, { target: { value: "Canada" } });
    expect(inputElement).toHaveValue("Canada");
  });

  it("should filter the options based on the input value", () => {
    render(<Autocomplete {...props} />);
    const inputElement = screen.getByPlaceholderText("Type country name");
    fireEvent.change(inputElement, { target: { value: "Uni" } });
    const optionElement = screen.getByText("United States");
    expect(optionElement).toBeInTheDocument();
  });
});
