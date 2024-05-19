import { PageOrderStyle, PageElement, PageTitle, PageSubtitle, PageButtons, DeleteButton, PlusButton, InPageElement, ElementList } from "./style";
import { useState } from "react";
import AddElement from "../AddElement";

const PageOrder = ({ elem, handleCreateElement, handleDeleteElement }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    console.log("ELEM", elem);

    const handlePlusClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <PageOrderStyle>
            <PageElement>
                <PageTitle>Page1</PageTitle>
                <PageButtons>
                    <PlusButton onClick={handlePlusClick} isExpanded={isExpanded} />
                    <DeleteButton />
                </PageButtons>
            </PageElement>

            {isExpanded && (
                <>
                    {elem.map((element, index) => (
                        <InPageElement key={index} isExpanded={isExpanded}>
                            <ElementList isExpanded={isExpanded}>
                                <PageSubtitle>{element}</PageSubtitle>
                                <DeleteButton onClick={() => handleDeleteElement(index)}/>
                            </ElementList>
                        </InPageElement>
                    ))}
                    {elem.length < 4 && (
                        <AddElement e={elem} handleCreateElement={handleCreateElement} />
                    )}

                    
                </>
            )}
        </PageOrderStyle>
    );
};

export default PageOrder;
