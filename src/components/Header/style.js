import styled from "styled-components";
import { IoSaveOutline, IoShareSocialOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const HeaderContainer = styled.div`
    background-color: #1a1a1a;
    color: white;
    padding: 3px 32px;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLogo = styled.img`
    height: 50%;
    object-fit: contain;
    cursor: pointer;
`;

const HeaderButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 8rem;
`;

const SaveButton = styled(IoSaveOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const ShareButton = styled(IoShareSocialOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const MoonButton = styled(IoMoonOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const SunButton = styled(IoSunnyOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const Title = styled.h1`
    text-align: center;
    color: #6ac16e;
`;

const BlueSquare = styled.div`
    position: absolute;
    top: 70px;  
    left: 0px;
    width: 300px;
    height: 150px;
    background-color: blue;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const RedCircle = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 800px;
    height: 400px;
    background-color: red;
    border-radius: 5%;
    clip-path: circle(50% at 100% 100%);
`;

const YellowTriangle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 150px solid yellow;
`;

const ContentText = styled.div`
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 20px;
`;

export {
    HeaderContainer,
    HeaderLogo,
    HeaderButtonsContainer,
    SaveButton,
    ShareButton,
    Title,
<<<<<<< HEAD
    MoonButton,
    SunButton,
=======
    BlueSquare,
    RedCircle,
    YellowTriangle,
    ContentText
>>>>>>> b7e64b4 (Resolve merge conflicts)
};
