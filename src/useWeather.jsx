import {useEffect, useState} from "react";
import Axios from "axios";
import {Icon} from "./lib/Icon";

const apiKey = "rROf2E03jvAuoGHqG6Aq1TkCN5L4QzhO";

export const useWeather = () => {
    const [weather, setWeather] = useState({state: false});
    const [weatherOption, setWeatherOption] = useState("default")
    const [city, setCity] = useState();
    const getCityName = ({target}) => setCity(target.value);
    const fiveDaysWeather = () => setWeatherOption("fiveDays")
    const hours = () => setWeatherOption("hours")
    const oneDayWeather = () => setWeatherOption("oneDay")

    useEffect(() => {
        fetchData();
    }, [weatherOption]);

    const fetchData = async () => {
        if (city) {
            setWeather({state: "loading"});
            try {
                const cityKeyResponse = await Axios.get(
                    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=pl-Pl`
                );
                const cityKey = cityKeyResponse.data[0]?.Key;
                switch (weatherOption) {
                    case "oneDay":
                        const oneDayWeatherResponse = await Axios.get(
                            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=pl-PL`
                        );
                        const iconDayNumber = oneDayWeatherResponse.data.DailyForecasts[0].Day.Icon;
                        const iconNightNumber =
                            oneDayWeatherResponse.data.DailyForecasts[0].Night.Icon;
                        setWeather({
                            state: "succes",
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            dayIcon: Icon.find(({id}) => id === iconDayNumber).icon,
                            nightIcon: Icon.find(({id}) => id === iconNightNumber).icon,
                            dayInfo: oneDayWeatherResponse.data.DailyForecasts[0].Day.IconPhrase,
                            nightInfo: oneDayWeatherResponse.data.DailyForecasts[0].Night.IconPhrase,
                            dayTemperature: (
                                (oneDayWeatherResponse.data.DailyForecasts[0].Temperature.Maximum.Value -
                                    32) *
                                0.5555556
                            ).toFixed(1),
                            nightTemperature: (
                                (oneDayWeatherResponse.data.DailyForecasts[0].Temperature.Minimum.Value -
                                    32) *
                                0.5555556
                            ).toFixed(1),
                        });
                        break;
                    case "fiveDays" :
                        const fiveDaysWeatherResponse = await Axios.get(
                            `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=pl-PL`
                        );
                        const iconDayOneNumber = fiveDaysWeatherResponse.data.DailyForecasts[0].Day.Icon;
                        const iconNightOneNumber = fiveDaysWeatherResponse.data.DailyForecasts[0].Night.Icon;
                        const iconDayTwoNumber = fiveDaysWeatherResponse.data.DailyForecasts[1].Day.Icon;
                        const iconNightTwoNumber = fiveDaysWeatherResponse.data.DailyForecasts[1].Night.Icon;
                        const iconDayThreeNumber = fiveDaysWeatherResponse.data.DailyForecasts[2].Day.Icon;
                        const iconNightThreeNumber = fiveDaysWeatherResponse.data.DailyForecasts[2].Night.Icon;
                        const iconDayFourNumber = fiveDaysWeatherResponse.data.DailyForecasts[3].Day.Icon;
                        const iconNightFourNumber = fiveDaysWeatherResponse.data.DailyForecasts[3].Night.Icon;
                        const iconDayFiveNumber = fiveDaysWeatherResponse.data.DailyForecasts[4].Day.Icon;
                        const iconNightFiveNumber = fiveDaysWeatherResponse.data.DailyForecasts[4].Night.Icon;
                        setWeather({
                            state: "succes",
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            dayOneDate: fiveDaysWeatherResponse.data.DailyForecasts[0].Date,
                            dayTwoDate: fiveDaysWeatherResponse.data.DailyForecasts[1].Date,
                            dayThreeDate: fiveDaysWeatherResponse.data.DailyForecasts[2].Date,
                            dayFourDate: fiveDaysWeatherResponse.data.DailyForecasts[3].Date,
                            dayFiveDate: fiveDaysWeatherResponse.data.DailyForecasts[4].Date,
                            dayOneIcon: Icon.find(({id}) => id === iconDayOneNumber).icon,
                            nightOneIcon: Icon.find(({id}) => id === iconNightOneNumber).icon,
                            dayTwoIcon: Icon.find(({id}) => id === iconDayTwoNumber).icon,
                            nightTwoIcon: Icon.find(({id}) => id === iconNightTwoNumber).icon,
                            dayThreeIcon: Icon.find(({id}) => id === iconDayThreeNumber).icon,
                            nightThreeIcon: Icon.find(({id}) => id === iconNightThreeNumber).icon,
                            dayFourIcon: Icon.find(({id}) => id === iconDayFourNumber).icon,
                            nightFourIcon: Icon.find(({id}) => id === iconNightFourNumber).icon,
                            dayFiveIcon: Icon.find(({id}) => id === iconDayFiveNumber).icon,
                            nightFiveIcon: Icon.find(({id}) => id === iconNightFiveNumber).icon,
                            dayOneInfo: fiveDaysWeatherResponse.data.DailyForecasts[0].Day.IconPhrase,
                            nightOneInfo: fiveDaysWeatherResponse.data.DailyForecasts[0].Night.IconPhrase,
                            dayTwoInfo: fiveDaysWeatherResponse.data.DailyForecasts[1].Day.IconPhrase,
                            nightTwoInfo: fiveDaysWeatherResponse.data.DailyForecasts[1].Night.IconPhrase,
                            dayThreeInfo: fiveDaysWeatherResponse.data.DailyForecasts[2].Day.IconPhrase,
                            nightThreeInfo: fiveDaysWeatherResponse.data.DailyForecasts[2].Night.IconPhrase,
                            dayFourInfo: fiveDaysWeatherResponse.data.DailyForecasts[3].Day.IconPhrase,
                            nightFourInfo: fiveDaysWeatherResponse.data.DailyForecasts[3].Night.IconPhrase,
                            dayFiveInfo: fiveDaysWeatherResponse.data.DailyForecasts[4].Day.IconPhrase,
                            nightFiveInfo: fiveDaysWeatherResponse.data.DailyForecasts[4].Night.IconPhrase,
                            dayOneTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[0].Temperature.Maximum.Value - 32) * 0.5555556).toFixed(1),
                            nightOneTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[0].Temperature.Minimum.Value - 32) * 0.5555556).toFixed(1),
                            dayTwoTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[1].Temperature.Maximum.Value - 32) * 0.5555556).toFixed(1),
                            nightTwoTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[1].Temperature.Minimum.Value - 32) * 0.5555556).toFixed(1),
                            dayThreeTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[2].Temperature.Maximum.Value - 32) * 0.5555556).toFixed(1),
                            nightThreeTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[2].Temperature.Minimum.Value - 32) * 0.5555556).toFixed(1),
                            dayFourTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[3].Temperature.Maximum.Value - 32) * 0.5555556).toFixed(1),
                            nightFourTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[3].Temperature.Minimum.Value - 32) * 0.5555556).toFixed(1),
                            dayFiveTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[4].Temperature.Maximum.Value - 32) * 0.5555556).toFixed(1),
                            nightFiveTemperature: ((fiveDaysWeatherResponse.data.DailyForecasts[4].Temperature.Minimum.Value - 32) * 0.5555556).toFixed(1),
                        });
                        break;
                    case "hours" :
                        const houersWeatherResponse = await Axios.get(
                            `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&language=pl-PL`
                        );
                        const iconHourOneNumber = houersWeatherResponse.data[0].WeatherIcon;
                        const iconHourTwoNumber = houersWeatherResponse.data[1].WeatherIcon;
                        const iconHourThreeNumber = houersWeatherResponse.data[2].WeatherIcon;
                        const iconHourFourNumber = houersWeatherResponse.data[3].WeatherIcon;
                        const iconHourFiveNumber = houersWeatherResponse.data[4].WeatherIcon;
                        const iconHourSixNumber = houersWeatherResponse.data[5].WeatherIcon;
                        const iconHourSevenNumber = houersWeatherResponse.data[6].WeatherIcon;
                        const iconHourEightNumber = houersWeatherResponse.data[7].WeatherIcon;
                        const iconHourNineNumber = houersWeatherResponse.data[8].WeatherIcon;
                        const iconHourTenNumber = houersWeatherResponse.data[9].WeatherIcon;
                        const iconHourElevenNumber = houersWeatherResponse.data[10].WeatherIcon;
                        const iconHourTwelveNumber = houersWeatherResponse.data[11].WeatherIcon;
                        setWeather({
                            state: "succes",
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            hourOneDate: houersWeatherResponse.data[0].DateTime,
                            hourTwoDate: houersWeatherResponse.data[1].DateTime,
                            hourThreeDate: houersWeatherResponse.data[2].DateTime,
                            hourFourDate: houersWeatherResponse.data[3].DateTime,
                            hourFiveDate: houersWeatherResponse.data[4].DateTime,
                            hourSixDate: houersWeatherResponse.data[5].DateTime,
                            hourSevenDate: houersWeatherResponse.data[6].DateTime,
                            hourEightDate: houersWeatherResponse.data[7].DateTime,
                            hourNineDate: houersWeatherResponse.data[8].DateTime,
                            hourTenDate: houersWeatherResponse.data[9].DateTime,
                            hourElevenDate: houersWeatherResponse.data[10].DateTime,
                            hourTwelveDate: houersWeatherResponse.data[11].DateTime,
                            hourOneIcon: Icon.find(({id}) => id === iconHourOneNumber).icon,
                            hourTwoIcon: Icon.find(({id}) => id === iconHourTwoNumber).icon,
                            hourThreeIcon: Icon.find(({id}) => id === iconHourThreeNumber).icon,
                            hourFourIcon: Icon.find(({id}) => id === iconHourFourNumber).icon,
                            hourFiveIcon: Icon.find(({id}) => id === iconHourFiveNumber).icon,
                            hourSixIcon: Icon.find(({id}) => id === iconHourSixNumber).icon,
                            hourSevenIcon: Icon.find(({id}) => id === iconHourSevenNumber).icon,
                            hourEightIcon: Icon.find(({id}) => id === iconHourEightNumber).icon,
                            hourNineIcon: Icon.find(({id}) => id === iconHourNineNumber).icon,
                            hourTenIcon: Icon.find(({id}) => id === iconHourTenNumber).icon,
                            hourElevenIcon: Icon.find(({id}) => id === iconHourElevenNumber).icon,
                            hourTwelveIcon: Icon.find(({id}) => id === iconHourTwelveNumber).icon,
                            hourOneInfo: houersWeatherResponse.data[0].IconPhrase,
                            hourTwoInfo: houersWeatherResponse.data[1].IconPhrase,
                            hourThreeInfo: houersWeatherResponse.data[2].IconPhrase,
                            hourFourInfo: houersWeatherResponse.data[3].IconPhrase,
                            hourFiveInfo: houersWeatherResponse.data[4].IconPhrase,
                            hourSixInfo: houersWeatherResponse.data[5].IconPhrase,
                            hourSevenInfo: houersWeatherResponse.data[6].IconPhrase,
                            hourEightInfo: houersWeatherResponse.data[7].IconPhrase,
                            hourNineInfo: houersWeatherResponse.data[8].IconPhrase,
                            hourTenInfo: houersWeatherResponse.data[9].IconPhrase,
                            hourElevenInfo: houersWeatherResponse.data[10].IconPhrase,
                            hourTwelveInfo: houersWeatherResponse.data[11].IconPhrase,
                            hourOneTemperature: ((houersWeatherResponse.data[0].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourTwoTemperature: ((houersWeatherResponse.data[1].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourThreeTemperature: ((houersWeatherResponse.data[2].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourFourTemperature: ((houersWeatherResponse.data[3].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourFiveTemperature: ((houersWeatherResponse.data[4].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourSixTemperature: ((houersWeatherResponse.data[5].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourSevenTemperature: ((houersWeatherResponse.data[6].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourEightTemperature: ((houersWeatherResponse.data[7].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourNineTemperature: ((houersWeatherResponse.data[8].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourTenTemperature: ((houersWeatherResponse.data[9].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourElevenTemperature: ((houersWeatherResponse.data[10].Temperature.Value - 32) * 0.5555556).toFixed(1),
                            hourTwelveTemperature: ((houersWeatherResponse.data[11].Temperature.Value - 32) * 0.5555556).toFixed(1),
                        });
                        break;
                    default:
                        const defaultWeatherResponse = await Axios.get(
                            `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pl-PL`
                        );
                        const iconNumber = defaultWeatherResponse.data[0].WeatherIcon;
                        setWeather({
                            state: "succes",
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            icon: Icon.find(({id}) => id === iconNumber).icon,
                            info: defaultWeatherResponse.data[0].WeatherText,
                            temperature: defaultWeatherResponse.data[0].Temperature.Metric.Value
                        });
                }
            } catch (error) {
                console.error(error);
                setWeather({state: "error"});
            }
        }
    };
    return {weather, weatherOption, getCityName, fetchData, fiveDaysWeather, hours, oneDayWeather};
};


