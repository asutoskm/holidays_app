export interface IHolidays {
    status: number
    warning: string
    requests: Requests
    holidays: Holiday[]
  }
  
  export interface Requests {
    used: number
    available: number
    resets: string
  }
  
  export interface Holiday {
    name: string
    date: string
    observed: string
    public: boolean
    country: string
    uuid: string
    weekday: Weekday
  }
  
  export interface Weekday {
    date: Date
    observed: Observed
  }
  
  export interface Date {
    name: string
    numeric: string
  }
  
  export interface Observed {
    name: string
    numeric: string
  }
  
/*
country: string, For countries, ISO 3166-1 alpha-2 or ISO 3166-1 alpha-3 format. For states / provinces (with our States & Provinces plan), ISO 3166-2 format. Accepts up to 10 comma separated values.
year: number, 4 digit year in ISO 8601 format.
month?: number  1 or 2 digit month (1-12).
*/
export async function getPublicHolidays(country: string, year: number, month?: number) {
    const myHeaders = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
        
    const requestOptions:any = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    } ;
	try {
		const monthQueryParam = month ? `&month=${month}` : ''; // optional month query parameter
		const url = `./api/holidays?country=${country}&year=${year}${monthQueryParam}`;
		const response = await fetch(url, requestOptions);
		const result = await response.json() as IHolidays;
		return result.holidays?result.holidays:[];
        //return result;
	} catch (error) {
		console.log('error', error);
	}
}
