import React, { useState } from 'react';
import { ParameterContainer } from "./style";
import { Title } from "../Title";
import { Line } from "../Line";
import { MdFormatBold } from "react-icons/md";

const Parameters = () => {
  const [size, setSize] = useState(1);
  const [isBold, setIsBold] = useState(false);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  return (
    <ParameterContainer>
      <Title>Design</Title>
      <Line />
      <label htmlFor="size">Taille:</label>
      <input type="color" value="#ff0000" />

      <input
        type="text"
        id="sizeW"
        name="W"
        value={size}
        onChange={handleSizeChange}
      />
      <p>{size}</p>
      <p>H</p>
      <input
        type="text"
        id="sizeH"
        name="H"
        value={size}
        onChange={handleSizeChange}
      />
      <p>{size}</p>
      <button onClick={handleBoldClick}>
        <MdFormatBold />
      </button>
    </ParameterContainer>
  );
}

export default Parameters;