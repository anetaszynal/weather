import React from "react";
import "./App.css";
import {Form} from "./components/Form";
import {Footer} from "./components/Footer";
import {DefaultWeather, FiveDaysWeather, HoursWeather, OneDayWeather} from "./components/Weather";
import {useWeather} from "./useWeather";
import {Loading, Failure} from "./styled";
import {Buttons} from "./components/Buttons";
import {API_RESPONSE_STATUS} from "./lib"

function App() {
    const {weather, weatherOption, getCityName, fetchData, fiveDaysWeather, hours, oneDayWeather} = useWeather();

    const onFormCityButtonClick = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <>
            <Form
                getCityName={getCityName}
                onFormCityButtonClick={onFormCityButtonClick}
            />
            {weather.state === API_RESPONSE_STATUS.loading && (
                <Loading>Proszę czekać, trwa pobieranie danych ...</Loading>
            )}
            {weather.state === API_RESPONSE_STATUS.error && (
                <Failure>
                    Niestety :( Nie udało się pobrać danych. Sprawdź czy poprawnie wpisałeś nazwę
                    miejscowości.
                </Failure>
            )}
            {weather.state === API_RESPONSE_STATUS.success && weatherOption === "oneDay" &&
            <OneDayWeather weather={weather} weatherData={weather.weather}/>}
            {weather.state === API_RESPONSE_STATUS.success && weatherOption === "default" &&
            <DefaultWeather weather={weather} weatherData={weather.weather}/>}
            {weather.state === API_RESPONSE_STATUS.success && weatherOption === "fiveDays" &&
            <FiveDaysWeather weather={weather}/>}
            {weather.state === API_RESPONSE_STATUS.success && weatherOption === "hours" &&
            <HoursWeather weather={weather}/>}
            <Buttons
                fiveDaysWeather={fiveDaysWeather}
                hours={hours}
                oneDayWeather={oneDayWeather}
            />
            <Footer/>
        </>
    );
}

export default App;
