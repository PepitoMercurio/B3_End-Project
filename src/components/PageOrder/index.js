import { PageOrderStyle, PageElement, PageTitle, PageSubtitle, PageButtons, DeleteButton, PlusButton, InPageElement, ElementList } from "./style";
import { useState } from "react";

const PageOrder = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePlusClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <PageOrderStyle>
            <PageElement>

                <PageTitle>Page1</PageTitle>

                <PageButtons>
                    <p>{isExpanded}</p>
                    <PlusButton 
                        onClick={handlePlusClick}
                        isExpanded={isExpanded}
                    />
                    <DeleteButton />
                </PageButtons>

            </PageElement>

            {isExpanded && (
                <InPageElement
                    isExpanded={isExpanded}
                >

                    <ElementList
                        isExpanded={isExpanded}
                    >
                        <PageSubtitle>Elem1</PageSubtitle>
                        <DeleteButton />
                    </ElementList>

                </InPageElement>
            )}

        </PageOrderStyle>
    );
};

export default PageOrder;