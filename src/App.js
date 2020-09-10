import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { Weather } from "./components/Weather";
import Axios from "axios";

const apiKey = "rROf2E03jvAuoGHqG6Aq1TkCN5L4QzhO";

function App() {
  const [weather, setWeather] = useState({ state: "loading" });
  const [city, setCity] = useState();
  const getCityName = ({ target }) => setCity(target.value);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (city) {
      try {
        const cityKeyResponse = await Axios.get(
          `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=pl-Pl`
        );
        const cityKey = cityKeyResponse.data[0]?.Key;
        const weatherResponse = await Axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=pl-PL`
        );
        setWeather({
          state: "succes",
          date: weatherResponse.data.DailyForecasts[0].Date,
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
        console.log(cityKeyResponse, weatherResponse);
      } catch (error) {
        console.error(error);
        setWeather({ state: "error" });
      }
    }
  };

  const onFormCityButtonClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <Header />
      {city & (weather.state === "loading") ? (
        <div>
          <p>Proszę czekać, trwa pobieranie danych ...</p>
        </div>
      ) : weather.state === "error" ? (
        <div>
          <p>
            Nieudało się pobrać danych. Sprawdź czy poprawnie wpisałeś nazwę
            miejscowości
          </p>
        </div>
      ) : (
        <>
          <Form
            getCityName={getCityName}
            onFormCityButtonClick={onFormCityButtonClick}
          />
          <Weather weather={weather} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
