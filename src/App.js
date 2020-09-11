import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { Weather } from "./components/Weather";
import { useWeather } from "./useWeather";

function App() {
  const { weather, city, getCityName, fetchData } = useWeather();

  const onFormCityButtonClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <Header />
      {weather.state === "loading" ? (
        <div>
          <p>Proszę czekać, trwa pobieranie danych ...</p>
        </div>
      ) : (
        <Form
          getCityName={getCityName}
          onFormCityButtonClick={onFormCityButtonClick}
        />
      )}
      {weather.state === "error" && (
        <div>
          <p>
            Nieudało się pobrać danych. Sprawdź czy poprawnie wpisałeś nazwę
            miejscowości
          </p>
        </div>
      )}
      {weather.state === "succes" && <Weather city={city} weather={weather} />}
      <Footer />
    </div>
  );
}

export default App;
