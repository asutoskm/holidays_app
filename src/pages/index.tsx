import Autocomplete from '@/components/Autocomplete';
import { HolidayContainer } from '@/components/HolidayContainer';
import MonthSelector from '@/components/MonthSelect';
import YearSelect from '@/components/YearSelect';
import useLocation from '@/hooks/useLocation';
import * as React from 'react';

export default function App() {
	const { country, isLoading, countryCode } = useLocation();
	const [ selectedCountryCode, setSelectedCountryCode ] = React.useState<string | null>(null);
  const [month,setMonth]=React.useState<number | undefined>(undefined);
  const [year,setYear]=React.useState<number | undefined>(2022);

	const handleOnOptionClick = (countryCode: string) => {
		setSelectedCountryCode(countryCode);
	};
  const handleOnMonthSelect=(month:number)=>{
    setMonth(month)
  }
  const handleOnYearSelect=(year:number)=>{
    setYear(year)
  }
  React.useEffect(()=>{
    if(countryCode)
     setSelectedCountryCode(countryCode);
  },[countryCode])
	return (
		<main className="w-screen h-screen  flex flex-col backdrop-blur-md bg-black/10 p-5">
			<div className="flex flex-col gap-5 justify-center items-center w-full h-full">
				<div className="flex gap-4  border border-black/10 rounded-lg px-4 py-2 bg-white items-end">
					<Autocomplete onOptionClick={handleOnOptionClick} defaultcountry={country ? country : undefined} />
					<YearSelect onSelect={handleOnYearSelect} />
					<MonthSelector onSelect={handleOnMonthSelect} />
				</div>
        {(!!selectedCountryCode  && !!year) && <HolidayContainer
          country={selectedCountryCode}
          year={year}
          month={month}
        />}
			</div>
		</main>
	);
}
