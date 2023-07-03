import useLocation from '@/hooks/useLocation';
import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  const { country, isLoading } = useLocation();
  return (
    <div className='bg-slate-700 flex flex-col gap-5'>
     <div>country {country}</div>
     <div> isLoading {isLoading?'true':'false'}</div>
    </div>
  );
}
