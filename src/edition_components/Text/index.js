import styled from "styled-components";

const Text = styled.p`
    font-size: 32px;
    color: ${props => props.color || "black"};
    font-weight: ${props => props.bold ? "bold" : "normal"};
    text-decoration: ${props => {
        let decoration = "";
        if (props.underline) decoration += "underline ";
        if (props.strikethrough) decoration += "line-through ";
        return decoration.trim() || "none";
    }};
    text-align: ${props => props.align || "left"};
    font-style: ${props => props.italic ? "italic" : "normal"};

    width: ${props => {
        if (props.elementsLength === 1) return "100%";
        return "45%";
    }};

    height: ${props => {
        if (props.elementsLength === 3 && props.index === 0) return "100%";
        if (props.elementsLength <= 2) return "100%";
        return "40%";
    }};
`;

const TextComponent = ({ text = "TextComponent", align, color, bold, underline, italic, strikethrough, index, elementsLength }) => {
    return (
        <Text
            index={index}
            elementsLength={elementsLength}
            align={align}
            color={color}
            bold={bold}
            underline={underline}
            italic={italic}
            strikethrough={strikethrough}
        >
            {text}
        </Text>
    );
};

export default TextComponent;
