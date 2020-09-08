import React, { useState } from "react";
import { useDate } from "./useDate";
import { formatDate } from "../../lib/utils";

export const Form = () => {
  const [city, setCity] = useState("");
  const date = useDate();

  const onSearchButtonClick = (event) => {
    event.preventDefault();
    console.log(city);
  };
  return (
    <>
      <h2>{`Witaj! Dziś jest ${formatDate(date)}`}</h2>
      <form>
        <label>
          <p>Wpisz nazwę miasta, dla którego chcesz sprawdzić pogodę :</p>
          <input
            type="text"
            name="city"
            placeholder="Wpisz nazwę miejscowości"
            onChange={({ target }) => setCity(target.value)}
          ></input>
        </label>
        <button onClick={onSearchButtonClick}>🔍</button>
      </form>
    </>
  );
};
