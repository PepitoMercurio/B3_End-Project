import React, { useState } from 'react';
import { AddElementStyle, AddElementButton, OptionsList, OptionItem } from './style';

const AddElement = ({ page, handleCreateElement }) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setIsOptionsVisible(!isOptionsVisible);
    };

    const handleOptionClick = (option) => {
        const data = {
            componentName: option,
            params: {},
        };
        const toAdd = JSON.stringify(data);
        handleCreateElement(page, toAdd);
        setIsOptionsVisible(false);
    };

    return (
        <div>
            <AddElementStyle onClick={toggleOptions}>
                <AddElementButton />
            </AddElementStyle>
            {isOptionsVisible ? (
                <OptionsList>
                    <OptionItem onClick={() => handleOptionClick('TextComponent')}>Texte</OptionItem>
                    <OptionItem onClick={() => handleOptionClick('ImageComponent')}>Image</OptionItem>
                    <OptionItem onClick={() => handleOptionClick('option3')}>Option 3</OptionItem>
                </OptionsList>
            ) : null}
        </div>
    );
};

export default AddElement;
