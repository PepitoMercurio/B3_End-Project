import { useNavigate } from "react-router-dom";
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
    );
}

export default Header;
