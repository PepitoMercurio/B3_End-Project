import styled from "styled-components";

const ImageDiv = styled.div`
    position: relative;
    width: ${props => {
        if (props.length === 1) return "100%";
        return "45%";
    }};
    height: ${props => {
        if (props.length === 3 && props.index === 0) return "90%";
        if (props.length <= 2) return "100%";
        return "40%";
    }};
    background-color: yellow;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const ImageComponent = ({ src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG/1200px-Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG", alt, index, length }) => {
    return (
        <ImageDiv index={index} length={length}>
            <Image src={src} alt={alt} />
        </ImageDiv>
    );
}

export default ImageComponent;
