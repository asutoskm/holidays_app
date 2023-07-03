import { COUNTRIES } from '@/constant/countries';
import React, { useEffect, useState } from 'react';

interface AutocompleteOption {
    value: string;
    label: string;
}
export interface IAutocompleteProps {
    defaultcountry?: string,
    onOptionClick: (arg: string) => void
}


const Autocomplete = (props: IAutocompleteProps) => {
    const [value, setValue] = useState(props.defaultcountry ?? '');
    useEffect(() => {
        if (props.defaultcountry) {
            setValue(props.defaultcountry);
            setOptionSet(true)
        }
    }, [props.defaultcountry])
    const [optionSet, setOptionSet] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptionSet(false)
        setValue(event.target.value);
    };
    const handleOptionClick = (option: AutocompleteOption) => {
        setOptionSet(true)
        setValue(option.label);
        props.onOptionClick(option.value)
    }
    const options = Object.entries(COUNTRIES)
        .map(([label, value]) => ({
            value,
            label,
        }))
        .filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );

    return (
        <div className='flex flex-col w-96'>
            <div className='flex flex-col gap-1'>
                <label className="text-black/40 ml-1">
                   Country*
                </label>
                <div className=' border border-black/10 rounded-lg px-4 py-2 bg-white'>
                    <input className='w-full h-10 overflow-hidden outline-none' type="text" value={value} onChange={handleChange} placeholder='Type country name' />
                </div>
            </div>
            {(!optionSet && value.length > 1) && <div className='relative flex w-full z-20'>
                <ul className='max-h-40 absolute top-1 bg-white box-shadow border border-white/10 rounded-lg rounded-t-none w-full left-0 flex gap-2 flex-col  px-4 py-2 overflow-y-auto'>
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</li>
                    ))}
                </ul>
            </div>}
        </div>
    );
};

export default Autocomplete;
