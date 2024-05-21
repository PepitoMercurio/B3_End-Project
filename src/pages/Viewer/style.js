import styled from "styled-components";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";

const ViewerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const ViewerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #4F4F4F;
    padding: 5px 32px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
`;

const ViewerNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    padding: 10px;
    box-sizing: border-box;
`;

const LeftArrow = styled(FaArrowLeft)`
    font-size: 24px;
    background-color: red;
    padding: 10px;
    border-radius: 100%;
    opacity: ${props => props.isFake ? 0 : 1};
    cursor: ${props => props.isFake ? null : "pointer"};
`;

const RightArrow = styled(FaArrowRight)`
    font-size: 24px;
    background-color: red;
    padding: 10px;
    border-radius: 100%;
    opacity: ${props => props.isFake ? 0 : 1};
    cursor: ${props => props.isFake ? null : "pointer"};
`;

const ViewerInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 2rem;
`;



export { ViewerStyle, ViewerBox, ViewerNavigation, LeftArrow, RightArrow, ViewerInput};