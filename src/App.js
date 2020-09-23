import React from "react";
import "./App.css";
import {Form} from "./components/Form";
import {Footer} from "./components/Footer";
import {DefaultWeather, FiveDayWeather, HoursWeather, Weather} from "./components/Weather";
import {useWeather} from "./useWeather";
import {Loading, Failure} from "./styled";
import {Buttons} from "./components/Buttons";

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
            {weather.state === "loading" && (
                <Loading>Proszę czekać, trwa pobieranie danych ...</Loading>
            )}
            {weather.state === "error" && (
                <Failure>
                    Niestety :( Nie udało się pobrać danych. Sprawdź czy poprawnie wpisałeś nazwę
                    miejscowości.
                </Failure>
            )}
            {weather.state === "succes" && weatherOption === "oneDay" && <Weather weather={weather}/>}
            {weather.state === "succes" && weatherOption === "default" && <DefaultWeather weather={weather}/>}
            {weather.state === "succes" && weatherOption === "fiveDays" && <FiveDayWeather weather={weather}/>}
            {weather.state === "succes" && weatherOption === "hours" && <HoursWeather weather={weather}/>}
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
