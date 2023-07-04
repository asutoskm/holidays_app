import React from "react";
import { render } from "@testing-library/react";
import { Cards, ICardsProps } from "@/components/Cards";

test("renders cards component correctly", () => {
  const props: ICardsProps = {
    name: "Card 1",
    date: "2021-09-15",
    public: true,
  };

  const { getByText } = render(<Cards {...props} />);

  const nameElement = getByText(/Card 1/i);
  const dateElement = getByText(/Date : 2021-09-15/i);
  const publicElement = getByText(/Public/i);

  expect(nameElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(publicElement).toBeInTheDocument();
});
