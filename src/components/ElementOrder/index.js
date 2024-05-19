import { useState } from "react";
import { ElementOrderStyle, ElementOrderContainer } from "./style";
import { Title } from "../Title";
import { Line } from "../Line";
import PageOrder from "../PageOrder";

const ElementOrder = ({elements}) => {
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
                    {elements.map((element, index) => (
                        <PageOrder key={index} elem={element.elements}/>
                    ))}
                </ElementOrderContainer>
            :
                <p>test</p>
            }
        </ElementOrderStyle>
    );
}

export default ElementOrder;