import React from "react";
import "./App.css";
import {Form} from "./components/Form";
import {Footer} from "./components/Footer";
import {Weather} from "./components/Weather";
import {useWeather} from "./useWeather";
import {Loading, Failure} from "./styled";

function App() {
    const {weather, city, getCityName, fetchData} = useWeather();

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
            {weather.state === "succes" && <Weather city={city} weather={weather}/>}
            <Footer/>
        </>
    );
}

export default App;
