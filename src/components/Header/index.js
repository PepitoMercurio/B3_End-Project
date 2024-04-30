import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderButtonsContainer, SaveButton, ShareButton } from "./style";
import logo from "../../images/yword.png";


const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="logo" onClick={() => navigate("/")} />
            <HeaderButtonsContainer>
                <SaveButton onClick={() => alert("Saved!")} />
                <ShareButton onClick={() => alert("Shared!")} />
            </HeaderButtonsContainer>
        </HeaderContainer>
    );
}

export default Header;