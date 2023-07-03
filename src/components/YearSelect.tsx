import { useState } from 'react';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, index) => currentYear - index);
interface IYearSelectprops {
	onSelect: (select: number) => void;
}
export default function YearSelect(props: IYearSelectprops) {
	const [ selectedYear, setSelectedYear ] = useState<number | null>(2022);

	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(parseInt(event.target.value));
		props.onSelect(parseInt(event.target.value));
	};

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor="year" className="text-black/40 ml-1">
				Year*
			</label>
			<div className="border border-black/10 rounded-lg px-4 py-2 bg-white">
				<select
					id="year"
					className=" h-10 text-black/90  outline-none "
					value={selectedYear || ''}
					onChange={handleYearChange}
				>
					{years.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
