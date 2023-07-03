import { HOLIDAYS_API } from '@/constant/constants';

const myHeaders = new Headers({
	'Content-Type': 'application/x-www-form-urlencoded'
});

const urlencoded = new URLSearchParams();
urlencoded.set('country', 'IN');
urlencoded.set('year', '2022');
urlencoded.set('pretty', '');
urlencoded.set('key', HOLIDAYS_API);

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	body: urlencoded,
	redirect: 'follow'
} as RequestInit;

/*
country: string, For countries, ISO 3166-1 alpha-2 or ISO 3166-1 alpha-3 format. For states / provinces (with our States & Provinces plan), ISO 3166-2 format. Accepts up to 10 comma separated values.
year: number, 4 digit year in ISO 8601 format.
month?: number  1 or 2 digit month (1-12).
*/
export async function getPublicHolidays(country: string, year: number, month?: number) {
	try {
		const monthQueryParam = month ? `&month=${month}` : ''; // optional month query parameter
		const url = `https://holidayapi.com/v1/holidays?country=${country}&year=${year}${monthQueryParam}&pretty&key=${process
			.env.API_KEY}`;
		const response = await fetch(url, requestOptions);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.log('error', error);
	}
}
