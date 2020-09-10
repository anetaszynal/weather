import React from "react";
import { useDate } from "./useDate";
import { formatDate } from "../../lib/utils";

export const Form = ({ getCityName, onFormCityButtonClick }) => {
  const date = useDate();

  return (
    <>
      <h2>{`Witaj! Dziś jest ${formatDate(date)}`}</h2>
      <form>
        <label>
          <input
            type="text"
            name="city"
            placeholder="Wpisz nazwę miejscowości"
            onChange={getCityName}
          ></input>
        </label>
        <button onClick={onFormCityButtonClick}>{`🔍`}</button>
      </form>
    </>
  );
};
