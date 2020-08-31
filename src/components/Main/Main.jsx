import React, { useState } from "react";
import { useDate } from "./useDate";
import { formatDate } from "../../lib/utils";

export const Main = () => {
  const [city, setCity] = useState("");
  const date = useDate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(city);
  };
  return (
    <main>
      <h2>{`Witaj! Dziś jest ${formatDate(date)}`}</h2>
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
    </main>
  );
};
