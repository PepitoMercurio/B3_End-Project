import styled from "styled-components";

const ParameterContainer = styled.div`
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

const ParameterElement = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    padding: 2px 10px;
    border-radius: 5px;
    margin: 15px 0;
`;

const ParameterText = styled.p`
    font-size: 1rem;
    text-align: center;
`;

const PageTitle = styled.input`
    font-size: 1rem;
    text-align: center;
    width: 85%;
    margin: 10px 0;
    padding: 5px;
    border-radius: 5px;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin: 5px 0 10px 0;
`;

export {
    ParameterContainer,
    ParameterElement,
    ParameterText,
    PageTitle,
    Checkbox
};