// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HOLIDAYS_API } from '@/constant/constants';
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

async function fetchHolidays(country: string, year: number, month?: number): Promise<string> {
  const monthQueryParam = month ? `&month=${month}` : '';
  const url = `https://holidayapi.com/v1/holidays?country=${country}&year=${year}${monthQueryParam}&pretty&key=${HOLIDAYS_API}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { country, year, month } = req.query;
    const holidays:any = await fetchHolidays(country as string, parseInt(year as string), parseInt(month as string));
    res.status(200).json(holidays);
  } catch (error) {
    res.status(500);
  }
}
