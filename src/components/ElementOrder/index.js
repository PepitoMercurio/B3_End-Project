import { useState } from "react";
import { ElementOrderStyle, ElementOrderContainer } from "./style";
import {Title} from "../Title";
import {Line} from "../Line";
import PageOrder from "../PageOrder";
import AddPage from "../AddPage";

const ElementOrder = ({ elements, handleCreatePage, handleCreateElement, handleDeleteElement }) => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    const handleDisplay = () => {
        setIsDisplayed(!isDisplayed);
    };

    return (
        <ElementOrderStyle isDisplayed={isDisplayed}>
            {isDisplayed ? (
                <ElementOrderContainer>
                    <Title>Pages</Title>
                    <Line />
                    {elements.map((element, index) => (
                        <PageOrder
                            key={index}
                            pageKey={index}
                            elem={element.elements}
                            handleCreatePage={handleCreatePage}
                            handleCreateElement={handleCreateElement}
                            handleDeleteElement={handleDeleteElement}
                        />
                    ))}
                    <AddPage elements={elements} handleCreatePage={handleCreatePage} />
                </ElementOrderContainer>
            ) : (
                <p>test</p>
            )}
        </ElementOrderStyle>
    );
};

export default ElementOrder;
