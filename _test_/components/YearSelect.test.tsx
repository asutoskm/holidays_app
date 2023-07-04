import YearSelect from '@/components/YearSelect';
import { render, fireEvent } from '@testing-library/react';


describe('YearSelect', () => {
  test('should render the component correctly', () => {
    const onSelect = jest.fn();
    const { getByLabelText } = render(<YearSelect onSelect={onSelect} />);

    const selectElement = getByLabelText('Year*');
    expect(selectElement).toBeInTheDocument();

    const options = selectElement.querySelectorAll('option');
    expect(options.length).toBe(5);
  });

  test('should call onSelect prop with the selected year value', () => {
    const onSelect = jest.fn();
    const { getByLabelText } = render(<YearSelect onSelect={onSelect} />);

    const selectElement = getByLabelText('Year*');

    fireEvent.change(selectElement, { target: { value: '2020' } });

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(2020);
  });
});
