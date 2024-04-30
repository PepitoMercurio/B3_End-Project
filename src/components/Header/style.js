import styled from "styled-components";
import { IoSaveOutline, IoShareSocialOutline } from "react-icons/io5";

const HeaderContainer = styled.div`
    background-color: #1a1a1a;
    color: white;
    padding: 5px 32px;
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
    width: 4rem;
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

export {
    HeaderContainer,
    HeaderLogo,
    HeaderButtonsContainer,
    SaveButton,
    ShareButton
};