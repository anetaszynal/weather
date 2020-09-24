import React from "react";
import {Article} from "./Article";
import {Title} from "./styled";
import {formatWeatherHoursDate} from "../../lib/utils";

export const HoursWeather = ({weather}) => (
    <>
        <Title>{weather.city} </Title>
        {weather.weather.map(({hour, icon, info, temperature}, index) => (
            <Article
                key={index}
                title={formatWeatherHoursDate(hour)}
                icon={icon}
                info={info}
                temperature={temperature}
            />
        ))}
    </>
);