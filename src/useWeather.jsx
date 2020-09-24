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
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            weather: {
                                day: {
                                    icon: Icon.find(({id}) => id === oneDayWeatherResponse.data.DailyForecasts[0].Day.Icon).icon,
                                    info: oneDayWeatherResponse.data.DailyForecasts[0].Day.IconPhrase,
                                    temperature: temperatureCalculate(oneDayWeatherResponse.data.DailyForecasts[0].Temperature.Maximum.Value),
                                },
                                night: {
                                    icon: Icon.find(({id}) => id === oneDayWeatherResponse.data.DailyForecasts[0].Night.Icon).icon,
                                    info: oneDayWeatherResponse.data.DailyForecasts[0].Night.IconPhrase,
                                    temperature: temperatureCalculate(oneDayWeatherResponse.data.DailyForecasts[0].Temperature.Minimum.Value),
                                }
                            }
                        })
                        break;
                    case "fiveDays":
                        const fiveDaysWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            city: cityKeyResponse.data[0]?.LocalizedName,
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
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            weather: new Array(12).fill().map((item, index) => ({
                                hour: houersWeatherResponse.data[index].DateTime,
                                icon: Icon.find(({id}) => id === houersWeatherResponse.data[index].WeatherIcon).icon,
                                info: houersWeatherResponse.data[index].IconPhrase,
                                temperature: temperatureCalculate(houersWeatherResponse.data[index].Temperature.Value),
                            }))
                        })
                        break;
                    default:
                        const defaultWeatherResponse = await Axios.get(
                            `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&language=pl-PL`
                        );
                        setWeather({
                            state: API_RESPONSE_STATUS.success,
                            city: cityKeyResponse.data[0]?.LocalizedName,
                            weather: {
                                icon: Icon.find(({id}) => id === defaultWeatherResponse.data[0].WeatherIcon).icon,
                                info: defaultWeatherResponse.data[0].WeatherText,
                                temperature: defaultWeatherResponse.data[0].Temperature.Metric.Value,
                            }
                        })
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
