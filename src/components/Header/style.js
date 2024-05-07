// style.js

import styled from "styled-components";
import { IoSaveOutline, IoShareSocialOutline } from "react-icons/io5";

const HeaderContainer = styled.div`
    background-color: #1a1a1a;
    color: white;
    padding: 3px 32px;
    height: 8vh;
    display: flex;
    align-items: center;
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

const Title = styled.h1`
    text-align: center;
    color: #6ac16e;
`;

export {
    HeaderContainer,
    HeaderLogo,
    HeaderButtonsContainer,
    SaveButton,
    ShareButton,
    Title
};
