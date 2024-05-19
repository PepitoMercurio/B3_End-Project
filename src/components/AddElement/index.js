import { AddElementStyle, AddElementButton } from "./style";

const AddElement = ({e, handleCreateElement }) => {
    console.log("E",e);

    return (
        <AddElementStyle onClick={handleCreateElement}>
            <AddElementButton />
        </AddElementStyle>
    )
};

export default AddElement;
