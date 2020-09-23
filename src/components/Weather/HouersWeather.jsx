import React from "react";
import {Article} from "./Article";
import {Title} from "./styled";
import {formatWeatherHoursDate} from "../../lib/utils";

export const HoursWeather = ({weather}) => {

    return (
        <>
            <Title>{weather.city} </Title>
            <Article
                title={formatWeatherHoursDate(weather.hourOneDate)}
                icon={weather.hourOneIcon}
                info={weather.hourOneInfo}
                temperature={weather.hourOneTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourTwoDate)}
                icon={weather.hourTwoIcon}
                info={weather.hourTwoInfo}
                temperature={weather.hourTwoTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourThreeDate)}
                icon={weather.hourThreeIcon}
                info={weather.hourThreeInfo}
                temperature={weather.hourThreeTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourFourDate)}
                icon={weather.hourFourIcon}
                info={weather.hourFourInfo}
                temperature={weather.hourFourTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourFiveDate)}
                icon={weather.hourFiveIcon}
                info={weather.hourFiveInfo}
                temperature={weather.hourFiveTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourSixDate)}
                icon={weather.hourSixIcon}
                info={weather.hourSixInfo}
                temperature={weather.hourSixTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourSevenDate)}
                icon={weather.hourSevenIcon}
                info={weather.hourSevenInfo}
                temperature={weather.hourSevenTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourEightDate)}
                icon={weather.hourEightIcon}
                info={weather.hourEightInfo}
                temperature={weather.hourEightTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourNineDate)}
                icon={weather.hourNineIcon}
                info={weather.hourNineInfo}
                temperature={weather.hourNineTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourTenDate)}
                icon={weather.hourTenIcon}
                info={weather.hourTenInfo}
                temperature={weather.hourTenTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourElevenDate)}
                icon={weather.hourElevenIcon}
                info={weather.hourElevenInfo}
                temperature={weather.hourElevenTemperature}
            />
            <Article
                title={formatWeatherHoursDate(weather.hourTwelveDate)}
                icon={weather.hourTwelveIcon}
                info={weather.hourTwelveInfo}
                temperature={weather.hourTwelveTemperature}
            />
        </>
    )
};