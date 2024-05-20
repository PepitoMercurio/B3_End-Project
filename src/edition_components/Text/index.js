import styled from "styled-components";

const Text = styled.p`
    font-size: 16px;
    color: black;
    font-weight: 400;
    text-align: left;
    background-color: blue;

    width: ${props => {
        if (props.length === 1) return "100%";
        return "45%";
    }};

    height: ${props => {
        if (props.length === 3 && props.index === 0) return "100%";
        if (props.length <= 2) return "100%";
        return "40%";
    }};
`;

const TextComponent = ({ text, index, length }) => {
    return (
        <Text index={index} length={length}>
            {text}
        </Text>
    );
}

export default TextComponent;
