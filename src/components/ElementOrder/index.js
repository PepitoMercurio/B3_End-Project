import { useState } from "react";
import { ElementOrderStyle, ElementOrderContainer } from "./style";
import { Title } from "../Title";
import { Line } from "../Line";
import PageOrder from "../PageOrder";

const ElementOrder = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    const handleDisplay = () => {
        setIsDisplayed(!isDisplayed);
    };

    return (
        <ElementOrderStyle
            isDisplayed={isDisplayed}
        >
            {isDisplayed ?
                <ElementOrderContainer>
                    <Title>Pages</Title>
                    <Line />
                    <PageOrder />
                    <PageOrder />
                    <PageOrder />
                </ElementOrderContainer>
            :
                <p>test</p>
            }
        </ElementOrderStyle>
    );
}

export default ElementOrder;