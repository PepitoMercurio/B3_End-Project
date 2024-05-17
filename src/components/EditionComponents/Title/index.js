import styled from "styled-components";

const TitleComponentStyle = styled.h1`
    color: white;
    font-size: 2em;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const TitleComponent = () => {
    return (
        <TitleComponentStyle>
            Title Component
        </TitleComponentStyle>
    );
}

export {
    TitleComponent,
};