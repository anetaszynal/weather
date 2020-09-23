import React from 'react';
import {Content, Title, Paragraph, Image} from "./styled";

export const Article = ({title, icon, info, temperature}) => (
    <article>
        <Title>{title}</Title>
        <Content>
            <Image src={icon} alt=""/>
            <Paragraph>{temperature}&#x2103;<br/>{info}</Paragraph>
        </Content>
    </article>
);