import styled from "styled-components";

const ElementOrderStyle = styled.div`
    height: 100%;
    padding: 5px 0;
    background-color: ${(props) => (props.isDisplayed ? "#2A2A2A" : "transparent")};

    @media screen and (max-width:680px) {
        position: absolute;
    }
`;

const ElementOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #2A2A2A;
    color: white;
    width: 17vw;
    height: 100%;
    padding: 5px 32px;
    text-align: left;
`;

export {
    ElementOrderStyle,
    ElementOrderContainer,
};