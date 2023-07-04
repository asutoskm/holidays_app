import { HolidayContainer, IHolidayContainerProps } from "@/components/HolidayContainer";
import { render } from "@testing-library/react";
import { useQuery } from "react-query";


jest.mock("react-query");

describe("HolidayContainer", () => {
  const mockUseQuery = useQuery as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render loader when isLoading is true", () => {
    mockUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const props: IHolidayContainerProps = {
      country: "US",
      year: 2022,
      month: 12,
    };

    const { container } = render(<HolidayContainer {...props} />);
    expect(container.querySelectorAll(".loader")).toHaveLength(1);
  });

  it("should render error message when there is an error", () => {
    mockUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Something went wrong"),
    });

    const props: IHolidayContainerProps = {
      country: "US",
      year: 2022,
      month: 12,
    };

    const { container } = render(<HolidayContainer {...props} />);

    expect(container.innerHTML).toContain("Something went wrong");
  });

  it("should render 'No Data Found' when data is empty", () => {
    mockUseQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });

    const props: IHolidayContainerProps = {
      country: "US",
      year: 2022,
      month: 12,
    };

    const { container } = render(<HolidayContainer {...props} />);

    expect(container.innerHTML).toContain("No Data Found");
  });

  it("should render the list of holiday cards when there is data", () => {
    const mockData = [
      {
        date: "2022-12-25",
        name: "Christmas",
        public: true,
        uuid: "123",
      },
      {
        date: "2022-12-31",
        name: "New Year's Eve",
        public: true,
        uuid: "456",
      },
    ];

    mockUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    const props: IHolidayContainerProps = {
      country: "US",
      year: 2022,
      month: 12,
    };

    const { container } = render(<HolidayContainer {...props} />);

    expect(container.querySelectorAll(".card")).toHaveLength(mockData.length);
  });
});
