import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 80rem;
    height: 10rem;
    background-color: #393939;
    border-radius: 5px;
`;

const InputText = styled.p`
    color: white;
    font-weight: 600;
    text-align: center;
    width: 2rem;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const InputStyle = styled.textarea`
    width: 100%;
    height: 20rem;
    color: white;
    background-color: #434343;
    border: 2px solid #323232;
    border-radius: 5px;
`;

export { InputContainer, InputText, InputStyle };