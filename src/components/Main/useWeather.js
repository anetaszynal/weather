import { useState, useEffect } from "react";
import Axios from "axios";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb3b01fa6b7dab6816f80450d9ec487b"
        );
        setWeatherData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return weatherData;
};
