import { PageOrderStyle, PageElement, PageTitle, PageSubtitle, PageButtons, DeleteButton, PlusButton, InPageElement, ElementList } from "./style";


const PageOrder = () => {
    return (
        <PageOrderStyle>
            <PageElement>

                <PageTitle>Page1</PageTitle>

                <PageButtons>
                    <PlusButton />
                    <DeleteButton />
                </PageButtons>

            </PageElement>

            <InPageElement>

                <ElementList>
                    <PageSubtitle>Elem1</PageSubtitle>
                    <DeleteButton />
                </ElementList>

            </InPageElement>

        </PageOrderStyle>
    );
};

export default PageOrder;