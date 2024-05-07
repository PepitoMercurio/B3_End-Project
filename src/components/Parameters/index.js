import React, { useState } from 'react';
import styled from 'styled-components';
import { ParameterContainer } from "./style";
import { Title } from "../Title";
import { Line } from "../Line";
import { MdFormatBold } from "react-icons/md";
import { MdFormatAlignCenter } from "react-icons/md";

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  p {
    margin-right: 6px;
  }
`;

const Parameters = () => {
  const [size, setSize] = useState(1);
  const [isBold, setIsBold] = useState(false);
  const [isCentered, setIsCentered] = useState(false);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleCenterClick = () => {
    setIsCentered(!isCentered);
  };

  return (
    <ParameterContainer>
      <Title>Design</Title>
      <Line />
      <label htmlFor="size">Taille:</label>
      <SizeContainer>
        <p>W</p>
        <input
          type="text"
          id="sizeW"
          name="W"
          value={size}
          onChange={handleSizeChange}
          style={{ width: '50px', height: '20px' }}
        />
        <p>{size}</p>
      </SizeContainer>
      <SizeContainer>
        <p>H</p>
        <input
          type="text"
          id="sizeH"
          name="H"
          value={size}
          onChange={handleSizeChange}
          style={{ width: '50px', height: '20px' }}
        />
        <p>{size}</p>

      </SizeContainer>
      <input type="color" value="#ff0000" />

      <button onClick={handleBoldClick}>
        <MdFormatBold />
      </button>
      <button onClick={handleCenterClick}>
        <MdFormatAlignCenter />
      </button>
    </ParameterContainer>
  );
}

export default Parameters;