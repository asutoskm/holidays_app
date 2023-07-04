import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Loader } from "@/components/Loader";

describe("Loader component", () => {
  test("should render", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  test("should apply custom className", () => {
    render(<Loader className="custom-loader" />);
    const loader = screen.getByTestId("loader");
    expect(loader).toHaveClass("custom-loader");
  });
});
