import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddPageStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    border-radius: 8px;

    &:hover {
        background-color: #1f1f1f;
    }
`;

const AddPageButton = styled(IoMdAddCircleOutline)`
    color: white;
    font-size: 25px;
`;

export { AddPageStyle, AddPageButton };