import React, { useState } from 'react';
import styled from 'styled-components';
import { ParameterContainer } from "./style";
import { Title } from "../Title";
import { Line, SmallLine } from "../Line";
import { MdFormatBold } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { MdFormatStrikethrough } from "react-icons/md";
import { MdFormatAlignCenter } from "react-icons/md";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdFormatAlignRight } from "react-icons/md"; // Ajoutez cette ligne

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  p {
    margin-right: 6px;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
  font-size: ${(props) => props.size}em;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  text-decoration: ${(props) =>
    props.isUnderlined ? "underline" : props.isStrikethrough ? "line-through" : "none"
  };
  text-align: ${(props) =>
    props.isCentered ? "center" : props.isLeft ? "left" : "right"};
`;

const Parameters = () => {
  const [size, setSize] = useState(1);
  const [isBold, setIsBold] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false); // Ajoutez cette ligne
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleUnderlinedClick = () => {
    setIsUnderlined(!isUnderlined);
  };

  const handleCenterClick = () => {
    setIsCentered(!isCentered);
    setIsLeft(false);
    setIsRight(false);
  };

  const handleLeftClick = () => {
    setIsLeft(!isLeft);
    setIsCentered(false);
    setIsRight(false);
  };

  const handleRightClick = () => {
    setIsRight(!isRight);
    setIsCentered(false);
    setIsLeft(false);
  };

  const handleStrikethroughClick = () => {
    setIsStrikethrough(!isStrikethrough);
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
        <p>{size}</p>
        <p>H</p>
        <input
          type="text"
          id="sizeH"
          name="H"
          value={size}
          onChange={handleSizeChange}
          style={{ width: '50px', height: '20px' }}
        />
        <SmallLine />
      </SizeContainer>
      <p>Alignement</p>
      <button onClick={handleLeftClick}>
        <MdFormatAlignLeft />
      </button>
      <button onClick={handleCenterClick}>
        <MdFormatAlignCenter />
      </button>
      <button onClick={handleRightClick}>
        <MdFormatAlignRight />
      </button>
      <SmallLine />
      <p>Color</p>
      <input type="color" value="#ff0000" />
      <SmallLine />
      <p>Decoration</p>
      <button onClick={handleBoldClick}>
        <MdFormatBold />
      </button>
      <button onClick={handleUnderlinedClick}>
        <MdFormatUnderlined />
      </button>
      <button onClick={handleStrikethroughClick}>
        <MdFormatStrikethrough />
      </button>
      <TextContainer
        size={size}
        isBold={isBold}
        isUnderlined={isUnderlined}
        isCentered={isCentered}
        isLeft={isLeft}
        isRight={isRight} // Ajoutez cette prop
        isStrikethrough={isStrikethrough}
      >
      </TextContainer>
    </ParameterContainer>
  );
}

export default Parameters;
