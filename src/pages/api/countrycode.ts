import { NextApiRequest, NextApiResponse } from "next";

interface GeoNamesResponse {
  countryCode: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lng } = req.query;

  try {
    const response = await fetch(
      `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=komkom`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the country code." });
  }
}
