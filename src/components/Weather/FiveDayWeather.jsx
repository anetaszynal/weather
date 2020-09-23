import React from "react";
import {Article} from "./Article";
import {Title, Content} from "./styled";
import {formatWeatherDaysDate} from "../../lib/utils";

export const FiveDayWeather = ({weather}) => {

    return (
        <>
            <Title>{weather.city} </Title>
            <Content>
                <Article
                    title={`${formatWeatherDaysDate(weather.dayOneDate)} - Dzień`}
                    icon={weather.dayOneIcon}
                    info={weather.dayOneInfo}
                    temperature={weather.dayOneTemperature}
                />
                <Article
                    title={`${formatWeatherDaysDate(weather.dayOneDate)} - Noc`}
                    icon={weather.nightOneIcon}
                    info={weather.nightOneInfo}
                    temperature={weather.nightOneTemperature}
                />
            </Content>
            <Content>
                <Article
                    title={`${formatWeatherDaysDate(weather.dayTwoDate)} - Dzień`}
                    icon={weather.dayTwoIcon}
                    info={weather.dayTwoInfo}
                    temperature={weather.dayTwoTemperature}
                />
                <Article
                    title={`${formatWeatherDaysDate(weather.dayTwoDate)} - Noc`}
                    icon={weather.nightTwoIcon}
                    info={weather.nightTwoInfo}
                    temperature={weather.nightTwoTemperature}
                />
            </Content>
            <Content>
                <Article
                    title={`${formatWeatherDaysDate(weather.dayThreeDate)} - Dzień`}
                    icon={weather.dayThreeIcon}
                    info={weather.dayThreeInfo}
                    temperature={weather.dayThreeTemperature}
                />
                <Article
                    title={`${formatWeatherDaysDate(weather.dayThreeDate)} - Noc`}
                    icon={weather.nightThreeIcon}
                    info={weather.nightThreeInfo}
                    temperature={weather.nightThreeTemperature}
                />
            </Content>
            <Content>
                <Article
                    title={`${formatWeatherDaysDate(weather.dayFourDate)} - Dzień`}
                    icon={weather.dayFourIcon}
                    info={weather.dayFourInfo}
                    temperature={weather.dayFourInfo}
                />
                <Article
                    title={`${formatWeatherDaysDate(weather.dayFourDate)} - Noc`}
                    icon={weather.nightFourIcon}
                    info={weather.nightFourInfo}
                    temperature={weather.nightFourTemperature}
                />
            </Content>
            <Content>
                <Article
                    title={`${formatWeatherDaysDate(weather.dayFiveDate)} - Dzień`}
                    icon={weather.dayFiveIcon}
                    info={weather.dayFiveInfo}
                    temperature={weather.dayFiveTemperature}
                />
                <Article
                    title={`${formatWeatherDaysDate(weather.dayFiveDate)} - Noc`}
                    icon={weather.nightFiveIcon}
                    info={weather.nightFiveInfo}
                    temperature={weather.nightFiveTemperature}
                />
            </Content>
        </>
    )
};
