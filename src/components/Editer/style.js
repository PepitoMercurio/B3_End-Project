import styled from "styled-components";

const EditerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 54vw;
    background-color: #4F4F4F;
    padding: 5px 32px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
`;

const BoxStyle = styled.div`
    background-color: white;
    aspect-ratio: 16 / 9;
    width: 90%;
    border-radius: 20px;
`;

export {
    EditerStyle,
    BoxStyle
};