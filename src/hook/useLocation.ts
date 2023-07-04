import { useState, useEffect } from "react";

type Location = {
  latitude: number | null;
  longitude: number | null;
  country: string | null;
  error: string | null;
  countryCode: string | null;
};

const useLocation = (): {
  country: string | null;
  isLoading: boolean;
  countryCode: string | null;
} => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    country: null,
    countryCode: null,
    error: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountry = async (latitude: number, longitude: number) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `./api/countrycode?lat=${latitude}&lng=${longitude}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocation((prevLocation) => ({
            ...prevLocation,
            country: data.countryName,
            countryCode: data.countryCode,
            error: null,
          }));
        } else {
          throw new Error("Failed to fetch country");
        }
      } catch (error) {
        setLocation((prevLocation) => ({
          ...prevLocation,
          error: "someting went wrong",
        }));
      } finally {
        setIsLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation((prevLocation) => ({
              ...prevLocation,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            }));

            fetchCountry(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            setLocation((prevLocation) => ({
              ...prevLocation,
              error: error.message,
            }));
            setIsLoading(false);
          }
        );
      } else {
        setLocation((prevLocation) => ({
          ...prevLocation,
          error: "Geolocation is not supported",
        }));
        setIsLoading(false);
      }
    };

    getLocation();
  }, []);

  return {
    country: location.country,
    countryCode: location.countryCode,
    isLoading,
  };
};

export default useLocation;
