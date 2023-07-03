import * as React from 'react';

export interface ICardsProps {
    name: string
    date: string
    public: boolean
}

export function Cards (props: ICardsProps) {
  return (
    <div className='border relative border-black/10 rounded-lg p-4 bg-white flex flex-col '>
      <div>{props.name}</div>
      <div>Date : {props.date}</div>
      {props.public?<div className='absolute -top-1 -right-1 bg-blue-700 rounded-lg text-white/90 px-2 py-1 text-xs'>Public</div>:null}
    </div>
  );
}
