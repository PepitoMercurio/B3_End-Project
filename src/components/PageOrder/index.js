import { 
    PageOrderStyle, 
    PageElement, 
    PageTitle, 
    PageSubtitle, 
    PageButtons, 
    DeleteButton, 
    PlusButton, 
    InPageElement, 
    ElementList 
} from "./style";
import { useState } from "react";
import AddElement from "../AddElement";

const PageOrder = ({ title, pageKey, elem, length, handleDeletePage, handleCreateElement, handleDeleteElement, handleSelectPage, handleSelectElement }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePlusClick = () => {
        handleSelectPage(pageKey)
        setIsExpanded(!isExpanded);
    };

    return (
        <PageOrderStyle>
            <PageElement>
                <PageTitle onClick={() => handleSelectPage(pageKey)}>{title}</PageTitle>
                <PageButtons>
                    <PlusButton onClick={handlePlusClick} isExpanded={isExpanded} />
                    { length > 1 && <DeleteButton onClick={() => handleDeletePage(pageKey)}/>}
                </PageButtons>
            </PageElement>

            {isExpanded && (
                <>
                    {elem.map((element, index) => {
                        // Analyser chaque élément de votre tableau elem en tant qu'objet JSON
                        const parsedElement = JSON.parse(element);
                        return (
                            <InPageElement key={index} isExpanded={isExpanded}>
                                <ElementList isExpanded={isExpanded}>
                                    {/* Utiliser les propriétés de l'objet JSON */}
                                    <PageSubtitle onClick={() => handleSelectElement(index)}>{parsedElement.componentName}</PageSubtitle>
                                    {elem.length > 1 && <DeleteButton onClick={() => handleDeleteElement(pageKey, index)} />}
                                </ElementList>
                            </InPageElement>
                        );
                    })}
                    {elem.length < 4 && (
                        <AddElement page={pageKey} handleCreateElement={handleCreateElement} />
                    )}
                </>
            )}
        </PageOrderStyle>
    );
};

export default PageOrder;
