import styled from "styled-components";

const ButtonStyle = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #4C4C4C;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    :hover {
        background-color: #5C5C5C;
    }
`;

export { ButtonStyle };
