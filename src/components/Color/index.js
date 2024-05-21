import React from 'react';
import { ColorContainer, ColorStyle } from './style';

const Color = ({ color, onChange }) => {
  return (
    <ColorContainer>
      <ColorStyle
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
    </ColorContainer>
  );
};

export default Color;
