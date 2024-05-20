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

const PageOrder = ({ title, pageKey, elem, handleDeletePage, handleCreateElement, handleDeleteElement }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePlusClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <PageOrderStyle>
            <PageElement>
                <PageTitle>{title}</PageTitle>
                <PageButtons>
                    <PlusButton onClick={handlePlusClick} isExpanded={isExpanded} />
                    <DeleteButton onClick={() => handleDeletePage(pageKey)}/>
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
                                    <PageSubtitle>{parsedElement.componentName}</PageSubtitle>
                                    <DeleteButton onClick={() => handleDeleteElement(pageKey, index)} />
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
