import React from 'react';
import { SrcStyle } from './style';

const SrcInput = ({ value, onChange, placeholder }) => {
    return (
        <SrcStyle
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default SrcInput;
