import React from "react";
import {Content, Paragraph} from "../../lib/Style/styled";

export const Footer = () => (
    <Content as="footer">
        <Paragraph>Strona wykonana przez Aneta Szynal</Paragraph>
        <Paragraph>Dane pogodowe pobrane zostały ze strony: https://www.accuweather.com</Paragraph>
    </Content>
);
