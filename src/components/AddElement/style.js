import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddElementStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #282c34; /* Ajout d'une couleur de fond initiale */

    &:hover {
        background-color: #1f1f1f;
    }
`;

const AddElementButton = styled(IoMdAddCircleOutline)`
    color: white;
    font-size: 25px;
`;

const OptionsList = styled.ul`
    list-style: none;
    margin: 10px 0 0 0; /* Ajustement des marges */
    padding: 0;
    background-color: black;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: absolute;
    z-index: 1000;
    width: 20rem; /* Pour que la liste prenne toute la largeur de l'élément parent */
`;

const OptionItem = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;

export { AddElementStyle, AddElementButton, OptionsList, OptionItem };
