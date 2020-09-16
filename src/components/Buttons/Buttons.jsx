import React from "react";
import {Paragraph, Wrapper, Button} from "./styled";

export const Buttons = () => (
    <>
        <Paragraph>Wybierz: </Paragraph>
        <Wrapper>
            <Button>na 10 dni</Button>
            <Button>24-godzinna</Button>
            <Button>na 15 dni</Button>
        </Wrapper>
    </>
)