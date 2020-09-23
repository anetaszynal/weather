import React from "react";
import {useDate} from "./useDate";
import {formatFullDate} from "../../lib/utils";
import {Title, Paragraph, Content, Input, Button} from "./styled";

export const Form = ({getCityName, onFormCityButtonClick}) => {
    const date = useDate();

    return (
        <>
            <Content as="header">
                <Title>Słonecznego dnia {`😉`}</Title>
                <Paragraph>{formatFullDate(date)}</Paragraph>
            </Content>
            <Content>
                <Input
                    type="text"
                    name="city"
                    placeholder="Wpisz nazwę miejscowości"
                    onChange={getCityName}
                />
                <Button onClick={onFormCityButtonClick}>{`🔍`}</Button>
            </Content>
        </>
    );
};
