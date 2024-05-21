import styled from "styled-components";

const TitleComponentStyle = styled.h1`
    color: black;
    font-size: 2em;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    margin-block-start: 8px;
    margin-block-end: 8px;
`;

const TitleComponent = ({title, display_title}) => {
    return display_title && <TitleComponentStyle>{title}</TitleComponentStyle>;
}

export {
    TitleComponent,
};