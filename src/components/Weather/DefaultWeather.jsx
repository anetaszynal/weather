import React from "react";
import {Article} from "./Article";
import {Title} from "./styled";

export const DefaultWeather = ({weather}) => {

    return (
        <>
            <Title>{weather.city} </Title>
            <Article
                title="Obecna pogoda"
                icon={weather.icon}
                info={weather.info}
                temperature={weather.temperature}
            />
        </>
    )
};