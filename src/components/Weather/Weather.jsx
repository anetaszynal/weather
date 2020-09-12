import React from "react";
import {Article} from "./Article";
import {Title, Content} from "./styled";

export const Weather = ({city, weather}) => (
    <>
        <Title>{city} </Title>
        <Content>
            <Article
                title="Dzień"
                icon={weather.dayIcon}
                info={weather.dayInfo}
                temperature={weather.dayTemperature}
            />
            <Article
                title="Noc"
                icon={weather.nightIcon}
                info={weather.nightInfo}
                temperature={weather.nightTemperature}
            />
        </Content>
    </>
);
