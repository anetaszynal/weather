import React, { useState } from "react";
import { useDate } from "./useDate";
import { formatDate } from "../../lib/utils";
import { useWeather } from "./useWeather";
import rain from "../../assets/rain.svg";

export const Main = () => {
  const [city, setCity] = useState("");
  const date = useDate();
  const weatherData = useWeather();

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(city);
  };
  return (
    <main>
      <h2>{`Witaj! Dziś jest ${formatDate(date)}`}</h2>
      {city === "" ? (
        <form onSubmit={onFormSubmit}>
          <label>
            <p>Wpisz nazwę miasta, dla którego chcesz sprawdzić pogodę :</p>
            <input
              name="city"
              placeholder="Wpisz nazwę miasta"
              onChange={({ target }) => setCity(target.value)}
            ></input>
          </label>
        </form>
      ) : (
        <div>
          <p>{`Pogoda dla ${weatherData.data.name}`} </p>
          <img src={rain} alt=""></img>
          <p>
            {`Dziś przygotuj się na ${weatherData.data.weather[0].description}`}{" "}
          </p>
        </div>
      )}
    </main>
  );
};
