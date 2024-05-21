import React, { useState } from 'react';
import { AddElementStyle, AddElementButton, OptionsList, OptionItem } from './style';

const AddElement = ({ page, handleCreateElement }) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setIsOptionsVisible(!isOptionsVisible);
    };

    const handleOptionClick = (option, params) => {
        const data = {
            componentName: option,
            params: params,
        };
        const toAdd = JSON.stringify(data);
        handleCreateElement(page, toAdd);
        setIsOptionsVisible(false);
    };

    const paramText = {
        text : "Texte",
        align : "left",
        color : "#000000",
        bold : false,
        italic : false,
        underline : false,
        strikethrough : false,
    }

    const paramImage = {
        src : "https://via.placeholder.com/150",
        alt : "Image",
    }

    return (
        <div>
            <AddElementStyle onClick={toggleOptions}>
                <AddElementButton />
            </AddElementStyle>
            {isOptionsVisible ? (
                <OptionsList>
                    <OptionItem onClick={() => handleOptionClick('TextComponent', paramText)}>Texte</OptionItem>
                    <OptionItem onClick={() => handleOptionClick('ImageComponent', paramImage)}>Image</OptionItem>
                </OptionsList>
            ) : null}
        </div>
    );
};

export default AddElement;
