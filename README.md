# Calendar App

This is a calendar application built using Nextjs and Typescript. It displays all the public holidays of a given year and country, with the option to specify the month as well. The application fetches real-time data from a calendar API (e.g. Open Holidays API).

## Requirements
Node.js (version X.X.X)
NPM (version X.X.X)
Installation
Clone the repository:
git clone git@github.com:asutoskm/holidays_app.git

## Navigate to the project directory:
cd holidays_app

## Install dependencies:
npm install

## Usage
Run the application:
npm start


### Open your browser and navigate to http://localhost:3000.

## In the application, you can enter the following information:

Country: Specify the country for which you want to see the public holidays.
Year: Specify the year for which you want to see the public holidays.
Month (Optional): Specify the month for which you want to see the public holidays. If not specified, it will default to the current month.
Click the "Submit" button to fetch and display the public holidays.
Testing

To run the integration tests, use the following command:

## npm test

## NOTE
The application uses a geo-location API to automatically detect the user's country and pre-fill the country field.
Repository

## License

This project is licensed under the MIT License.