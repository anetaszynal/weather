import {useEffect, useState} from "react";
import Axios from "axios";
import {Icon, temperatureCalculate, API_KEY, API_RESPONSE_STATUS} from "./lib";

export const useWeather = () => {
    const [weather, setWeather] = useState({});
    const [weatherOption, setWeatherOption] = useState("default");
    const [city, setCity] = useState();

    const getCityName = ({target}) => setCity(target.value);
    const fiveDaysWeather = () => setWeatherOption("fiveDays");
    const hours = () => setWeatherOption("hours");
    const oneDayWeather = () => setWeatherOption("oneDay");

    useEffect(() => {
        fetchData();
    }, [weatherOption]);

    const fetchData = async () => {
        if (city) {
            setWeather({state: API_RESPONSE_STATUS.loading});
            try {
                const cityKeyResponse = await Axios.get(
                    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}&language=pl-Pl`
                );
                const cityKey = cityKeyResponse.data[0]?.Key;
                switch (weatherOption) {
                    case "oneDay":
                        const oneDayWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        const iconDayNumber =
                            oneDayWeatherResponse.data.DailyForecasts[0].Day.Icon;
                        const iconNightNumber =
                            oneDayWeatherResponse.data.DailyForecasts[0].Night.Icon;
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            dayIcon: Icon.find(({id}) => id === iconDayNumber).icon,
                            nightIcon: Icon.find(({id}) => id === iconNightNumber).icon,
                            dayInfo:
                            oneDayWeatherResponse.data.DailyForecasts[0].Day.IconPhrase,
                            nightInfo:
                            oneDayWeatherResponse.data.DailyForecasts[0].Night.IconPhrase,
                            dayTemperature: (
                                (oneDayWeatherResponse.data.DailyForecasts[0].Temperature
                                        .Maximum.Value -
                                    32) *
                                0.5555556
                            ).toFixed(1),
                            nightTemperature: (
                                (oneDayWeatherResponse.data.DailyForecasts[0].Temperature
                                        .Minimum.Value -
                                    32) *
                                0.5555556
                            ).toFixed(1),
                        });
                        break;
                    case "fiveDays":
                        const fiveDaysWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            weather: new Array(5).fill().map((item, index) => ({
                                date: fiveDaysWeatherResponse.data.DailyForecasts[index].Date,
                                day: {
                                    icon: Icon.find(({id}) => id === fiveDaysWeatherResponse.data.DailyForecasts[index].Day.Icon).icon,
                                    info: fiveDaysWeatherResponse.data.DailyForecasts[index].Day.IconPhrase,
                                    temperature: temperatureCalculate(fiveDaysWeatherResponse.data.DailyForecasts[index].Temperature.Maximum.Value),
                                },
                                night: {
                                    icon: Icon.find(({id}) => id === fiveDaysWeatherResponse.data.DailyForecasts[index].Night.Icon).icon,
                                    info: fiveDaysWeatherResponse.data.DailyForecasts[index].Night.IconPhrase,
                                    temperature: temperatureCalculate(fiveDaysWeatherResponse.data.DailyForecasts[index].Temperature.Minimum.Value),
                                }
                            }))
                        })
                        break;
                    case "hours":
                        const houersWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        const iconHourOneNumber = houersWeatherResponse.data[0].WeatherIcon;
                        const iconHourTwoNumber = houersWeatherResponse.data[1].WeatherIcon;
                        const iconHourThreeNumber =
                            houersWeatherResponse.data[2].WeatherIcon;
                        const iconHourFourNumber =
                            houersWeatherResponse.data[3].WeatherIcon;
                        const iconHourFiveNumber =
                            houersWeatherResponse.data[4].WeatherIcon;
                        const iconHourSixNumber = houersWeatherResponse.data[5].WeatherIcon;
                        const iconHourSevenNumber =
                            houersWeatherResponse.data[6].WeatherIcon;
                        const iconHourEightNumber =
                            houersWeatherResponse.data[7].WeatherIcon;
                        const iconHourNineNumber =
                            houersWeatherResponse.data[8].WeatherIcon;
                        const iconHourTenNumber = houersWeatherResponse.data[9].WeatherIcon;
                        const iconHourElevenNumber =
                            houersWeatherResponse.data[10].WeatherIcon;
                        const iconHourTwelveNumber =
                            houersWeatherResponse.data[11].WeatherIcon;
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
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
                            hourThreeIcon: Icon.find(({id}) => id === iconHourThreeNumber)
                                .icon,
                            hourFourIcon: Icon.find(({id}) => id === iconHourFourNumber)
                                .icon,
                            hourFiveIcon: Icon.find(({id}) => id === iconHourFiveNumber)
                                .icon,
                            hourSixIcon: Icon.find(({id}) => id === iconHourSixNumber).icon,
                            hourSevenIcon: Icon.find(({id}) => id === iconHourSevenNumber)
                                .icon,
                            hourEightIcon: Icon.find(({id}) => id === iconHourEightNumber)
                                .icon,
                            hourNineIcon: Icon.find(({id}) => id === iconHourNineNumber)
                                .icon,
                            hourTenIcon: Icon.find(({id}) => id === iconHourTenNumber).icon,
                            hourElevenIcon: Icon.find(({id}) => id === iconHourElevenNumber)
                                .icon,
                            hourTwelveIcon: Icon.find(({id}) => id === iconHourTwelveNumber)
                                .icon,
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
                            hourOneTemperature: (
                                (houersWeatherResponse.data[0].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourTwoTemperature: (
                                (houersWeatherResponse.data[1].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourThreeTemperature: (
                                (houersWeatherResponse.data[2].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourFourTemperature: (
                                (houersWeatherResponse.data[3].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourFiveTemperature: (
                                (houersWeatherResponse.data[4].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourSixTemperature: (
                                (houersWeatherResponse.data[5].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourSevenTemperature: (
                                (houersWeatherResponse.data[6].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourEightTemperature: (
                                (houersWeatherResponse.data[7].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourNineTemperature: (
                                (houersWeatherResponse.data[8].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourTenTemperature: (
                                (houersWeatherResponse.data[9].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourElevenTemperature: (
                                (houersWeatherResponse.data[10].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                            hourTwelveTemperature: (
                                (houersWeatherResponse.data[11].Temperature.Value - 32) *
                                0.5555556
                            ).toFixed(1),
                        });
                        break;
                    default:
                        const defaultWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        const iconNumber = defaultWeatherResponse.data[0].WeatherIcon;
                        setWeather({
                            state: "succes",
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            icon: Icon.find(({id}) => id === iconNumber).icon,
                            info: defaultWeatherResponse.data[0].WeatherText,
                            temperature:
                            defaultWeatherResponse.data[0].Temperature.Metric.Value,
                        });
                }
            } catch (error) {
                console.error(error);
                setWeather({state: API_RESPONSE_STATUS.error});
            }
        }
    };
    return {
        weather,
        weatherOption,
        getCityName,
        fetchData,
        fiveDaysWeather,
        hours,
        oneDayWeather,
    };
};
