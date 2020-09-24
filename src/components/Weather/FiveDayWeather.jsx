import React from "react";
import {Article} from "./Article";
import {Title, Content} from "./styled";
import {formatWeatherDaysDate} from "../../lib/utils";

export const FiveDayWeather = ({weather}) => {
    return (
        <>
            <Title>{weather.city} </Title>
            {weather.weather.map(({date, day, night}, index) => (
                <Content key={index}>
                    <Article
                        title={`${formatWeatherDaysDate(date)} - Dzień`}
                        icon={day.icon}
                        info={day.info}
                        temperature={day.temperature}
                    />
                    <Article
                        title={`${formatWeatherDaysDate(date)} - Noc`}
                        icon={night.icon}
                        info={night.info}
                        temperature={night.temperature}
                    />
                </Content>
            ))}
        </>
    )
};
