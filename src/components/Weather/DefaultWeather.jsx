import React from "react";
import {Article} from "./Article";
import {Title} from "./styled";

export const DefaultWeather = ({weather, weatherData}) => (
    <>
        <Title>{weather.city} </Title>
        <Article
            title="Obecna pogoda"
            icon={weatherData.icon}
            info={weatherData.info}
            temperature={weatherData.temperature}
        />
    </>
);