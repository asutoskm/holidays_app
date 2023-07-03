import { getPublicHolidays } from '@/api/getPublicHolidays';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Cards } from './Cards';
import { Loader } from './Loader';

export interface IHolidayContainerProps {
    country: string, 
    year: number, 
    month?: number
}

export function HolidayContainer (props: IHolidayContainerProps) {
const { data, isLoading, error } = useQuery(`${props.country}-${props.year}-${props.month}`,  ()=> getPublicHolidays(props.country,props.year,props.month),{refetchInterval: 100000000,refetchOnMount:false});   
if(isLoading){
    return (<div>
        <Loader className='h-8 w-8' />
    </div>)
  }
if(error){
    return (<div>
        Some thing went wrong
    </div>)
}
return (
    <div className='flex justify-center p-6  overflow-y-auto' >
    <div className='flex flex-wrap gap-2 justify-center'>
      {data?.length?<>
        {data.map((d)=>{
            return <Cards
               date={d.date}
               name={d.name}
               public={d.public}
               key={d.uuid}
            />
        })}
      </>:<div>
        No Data Found
      </div>}
    </div>
    </div>
  );
}
