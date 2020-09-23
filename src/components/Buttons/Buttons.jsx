import React from "react";
import {Paragraph, Wrapper, Button} from "./styled";

export const Buttons = ({fiveDaysWeather, hours, oneDayWeather}) => (
    <>
        <Paragraph>Wybierz: </Paragraph>
        <Wrapper>
            <Button onClick={hours}>12-godzinna</Button>
            <Button onClick={oneDayWeather}>na 1 dzień</Button>
            <Button onClick={fiveDaysWeather}>na 5 dni</Button>
        </Wrapper>
    </>
)