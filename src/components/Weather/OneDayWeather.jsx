import React from "react";
import {Article} from "./Article";
import {Title, Content} from "./styled";

export const OneDayWeather = ({weather, weatherData}) => {

    return (
        <>
            <Title>{weather.city} </Title>
            <Content>
                <Article
                    title={`Dzień`}
                    icon={weatherData.day.icon}
                    info={weatherData.day.info}
                    temperature={weatherData.day.temperature}
                />
                <Article
                    title={`Noc`}
                    icon={weatherData.night.icon}
                    info={weatherData.night.info}
                    temperature={weatherData.night.temperature}
                />
            </Content>
        </>
    )
};
