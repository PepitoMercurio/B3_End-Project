import { AddPageStyle, AddPageButton } from "./style";

const AddPage = ({e, handleCreatePage }) => {
    console.log("E",e);

    return (
        <AddPageStyle onClick={handleCreatePage}>
            <AddPageButton />
        </AddPageStyle>
    )
};

export default AddPage;
