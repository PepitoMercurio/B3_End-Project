import { createPath } from "react-router-dom";
import styled from "styled-components";

const LoginPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    background-color: #4f4f4f;
    color: white;
`;

const LoginBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: start;
    width: 80vw;
    height: 80vh;
    background-color: #2a2a2a;
    border-radius: 20px;
`;

const AuthBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 90%;
    border-radius: 20px;
`;

const LoginTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bolder;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const LoginInput = styled.input`
    width: 80%;
    height: 2.5rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-size: 1rem;
    font-weight: 600;
`;

const LoginButton = styled.button`
    width: 35%;
    height: 2.5rem;
    border-radius: 10px;
    border: none;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 1));
    background-color: #393939;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        background-color: #ffffff;
        color: black;
        transition: 0.3s;
    }
`;

const WelcomeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 45%;
    border-radius: 20px;
`;

const LogoImg = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: contain;
`;

const LoginText = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const LoginChange = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0;
    color: #0094FF;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        transition: 0.3s;
    }
`;

export { LoginPageStyle, LoginContainer, LoginBox, AuthBox, LoginTitle, LoginInput, LoginButton, WelcomeBox, LogoImg, LoginText, LoginChange }