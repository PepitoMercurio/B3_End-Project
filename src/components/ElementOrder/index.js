import { useState } from "react";
import { ElementOrderStyle, ElementOrderContainer } from "./style";
import {Title} from "../Title";
import {Line} from "../Line";
import PageOrder from "../PageOrder";
import AddPage from "../AddPage";

const ElementOrder = ({ data, handleSelectPage, handleSelectElement, handleCreatePage, handleDeletePage, handleCreateElement, handleDeleteElement }) => {
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
                    {data.pages.map((element, index) => (
                        <PageOrder
                            key={index}
                            title={element.title}
                            pageKey={index}
                            elem={element.elements}
                            handleDeletePage={handleDeletePage}
                            handleCreateElement={handleCreateElement}
                            handleDeleteElement={handleDeleteElement}
                            handleSelectPage={handleSelectPage}
                            handleSelectElement={handleSelectElement}
                        />
                    ))}
                    <AddPage elements={data} handleCreatePage={handleCreatePage} />
                </ElementOrderContainer>
            ) : (
                <p>test</p>
            )}
        </ElementOrderStyle>
    );
};

export default ElementOrder;
