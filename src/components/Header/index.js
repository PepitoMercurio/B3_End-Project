import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { HeaderContainer, HeaderLogo, HeaderButtonsContainer, SaveButton, ShareButton, MoonButton, SunButton } from "./style";
import logo from "../../images/yword.png";
import React, { useState } from 'react';
import CreateData from "../../edition_components/SendData";


const Header = ({handleSendData}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState(localStorage.getItem('theme') || 'light');

    const handleColor = () => {
        const newColor = color === 'light' ? 'dark' : 'light';
        setColor(newColor);
        localStorage.setItem('theme', newColor);
    }

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="logo" onClick={() => navigate("/")} />
            <HeaderButtonsContainer>
                <CreateData id_user={"aaa"} title={"aaa"}/>
                <SaveButton onClick={handleSendData} />
                <ShareButton onClick={() => alert("Shared!")} />
                {color === 'light' ?
                    <MoonButton onClick={handleColor} />
                :
                    <SunButton onClick={handleColor} />
                }
            </HeaderButtonsContainer>
        </HeaderContainer>
=======
import {
    HeaderContainer,
    HeaderLogo,
    HeaderButtonsContainer,
    SaveButton,
    ShareButton,
    Title,
    BlueSquare,
    RedCircle,
    YellowTriangle,
    ContentText
} from "./style";
import logo from "../../images/yword.png";
import oiseauImage from "../../images/oiseau.png";
import { LoremIpsum } from "react-lorem-ipsum";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", position: "relative" }}>
            <HeaderContainer>
                <HeaderLogo src={logo} alt="logo" onClick={() => navigate("/")} />
                <div style={{ flex: 1 }}></div>
                <HeaderButtonsContainer>
                    <SaveButton onClick={() => alert("Saved!")} />
                    <ShareButton onClick={() => alert("Shared!")} />
                </HeaderButtonsContainer>
            </HeaderContainer>
            <BlueSquare />
            <RedCircle />
            <YellowTriangle />
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <img src={oiseauImage} alt="Oiseau volant" style={{ maxWidth: "50%", height: "auto" }} />
                    <Title>Lorem Ipsum</Title>
                    <ContentText>
                        <LoremIpsum p={1} />
                    </ContentText>
                </div>
            </div>
        </div>
>>>>>>> b7e64b4 (Resolve merge conflicts)
    );
}

export default HomePage;
