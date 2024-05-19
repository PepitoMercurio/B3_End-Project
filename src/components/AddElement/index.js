import { AddElementStyle, AddElementButton } from "./style";

const AddElement = ({ page, handleCreateElement }) => {
    return (
        <AddElementStyle onClick={() => handleCreateElement(page)}>
            <AddElementButton />
        </AddElementStyle>
    );
};

export default AddElement;
