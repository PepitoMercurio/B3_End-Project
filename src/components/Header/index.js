import { useNavigate } from "react-router-dom";
import { HeaderStyle, HeaderContainer, HeaderLogo, HeaderButtonsContainer, SaveButton, ShareButton, MoonButton, SunButton, LogoutButton } from "./style";
import logo from "../../images/yword.png";
import React, { useState } from 'react';
import CreateData from "../../edition_components/SendData";


const Header = ({handleSendData, isEdit=false}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState(localStorage.getItem('theme') || 'light');

    const handleColor = () => {
        const newColor = color === 'light' ? 'dark' : 'light';
        setColor(newColor);
        localStorage.setItem('theme', newColor);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <HeaderStyle>
            <HeaderContainer>
                <HeaderLogo src={logo} alt="logo" onClick={() => navigate("/home")} />
                <HeaderButtonsContainer>
                    {localStorage.getItem('token') && <CreateData id_user={"aaa"} title={"aaa"}/>}
                    {isEdit && <SaveButton onClick={handleSendData} />}
                    {isEdit && <ShareButton onClick={() => alert("Shared!")} />}
                    {localStorage.getItem('token') && <LogoutButton onClick={handleLogout} />}
                    {/* {color === 'light' ?
                        <MoonButton onClick={handleColor} />
                    :
                        <SunButton onClick={handleColor} />
                    } */}
                </HeaderButtonsContainer>
            </HeaderContainer>
        </HeaderStyle>
    );
}

export default Header;
