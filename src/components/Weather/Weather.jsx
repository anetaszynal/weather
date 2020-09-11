import React from "react";

export const Weather = ({ city, weather }) => (
  <>
    <h2>Pogoda dla miasta {city} </h2>
    <div>
      <h3>Dzień:</h3>
      <img src={weather.dayIcon} alt=""></img>
      <p>{weather.dayInfo}</p>
      <p>{weather.dayTemperature}&#x2103;</p>
    </div>
    <div>
      <h3>Noc:</h3>

      <p>{weather.nightInfo}</p>
      <p>{weather.nightTemperature}&#x2103;</p>
    </div>
  </>
);
