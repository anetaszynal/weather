import { useEffect, useState } from "react";
import Axios from "axios";
import { Icon } from "./lib/Icon";

const apiKey = "rROf2E03jvAuoGHqG6Aq1TkCN5L4QzhO";

export const useWeather = () => {
  const [weather, setWeather] = useState({ state: false });
  const [city, setCity] = useState();
  const getCityName = ({ target }) => setCity(target.value);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (city) {
      setWeather({ state: "loading" });
      try {
        const cityKeyResponse = await Axios.get(
          `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=pl-Pl`
        );
        const cityKey = cityKeyResponse.data[0]?.Key;
        const weatherResponse = await Axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=pl-PL`
        );
        const iconNumber = weatherResponse.data.DailyForecasts[0].Day.Icon;
        setWeather({
          state: "succes",
          dayIcon: Icon.find(({ id }) => id === iconNumber).icon,
          dayInfo: weatherResponse.data.DailyForecasts[0].Day.IconPhrase,
          nightInfo: weatherResponse.data.DailyForecasts[0].Night.IconPhrase,
          dayTemperature: (
            (weatherResponse.data.DailyForecasts[0].Temperature.Maximum.Value -
              32) *
            0.5555556
          ).toFixed(1),
          nightTemperature: (
            (weatherResponse.data.DailyForecasts[0].Temperature.Minimum.Value -
              32) *
            0.5555556
          ).toFixed(1),
        });
      } catch (error) {
        console.error(error);
        setWeather({ state: "error" });
      }
    }
  };
  return { weather, city, getCityName, fetchData };
};
