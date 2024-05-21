import React, { useState, useEffect } from 'react';
import { ParameterContainer, ParameterElement } from './style';
import { Title } from '../Title';
import { Line, SmallLine } from '../Line';
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdFormatStrikethrough, MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import Button from '../Button';
import Color from '../Color';
import SrcInput from '../Src';
import Input from '../Input';

const Parameters = ({ element, updateParams }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (element) {
      try {
        const parsedData = JSON.parse(element);
        setData(parsedData);
        console.log("aaaafcjjedef", data);
        console.log('Element data:', data);
      } catch (error) {
        console.error('Error parsing element data:', error);
      }
    }
  }, [element]);

  const handleParamChange = (param, value) => {
    if (data) {
      const updatedData = {
        ...data,
        params: {
          ...data.params,
          [param]: value,
        },
      };
      setData(updatedData);
      updateParams(JSON.stringify(updatedData));
    }
  };

  if (!data) {
    return null; // Ou afficher un message de chargement ou une erreur
  }

  return (
    <ParameterContainer>
      <Title>Design</Title>
      <Line />
      {data.componentName !== 'ImageComponent' ? (
        <>
          <ParameterElement>
            <Input
              value={data.params.text || ''}
              onChange={(e) => handleParamChange('text', e.target.value)}
            />
          </ParameterElement>

          <SmallLine />

          <ParameterElement>
            <Button icon={MdFormatAlignLeft} onClick={() => handleParamChange('align', 'left')} />
            <Button icon={MdFormatAlignCenter} onClick={() => handleParamChange('align', 'center')} />
            <Button icon={MdFormatAlignRight} onClick={() => handleParamChange('align', 'right')} />
          </ParameterElement>

          <SmallLine />

          <ParameterElement>
            <Color
              color={data.params.color || '#000000'}
              onChange={(color) => handleParamChange('color', color)}
            />
          </ParameterElement>

          <SmallLine />

          <ParameterElement>
            <Button icon={MdFormatBold} onClick={() => handleParamChange('bold', !data.params.bold)} />
            <Button icon={MdFormatUnderlined} onClick={() => handleParamChange('underline', !data.params.underline)} />
            <Button icon={MdFormatStrikethrough} onClick={() => handleParamChange('strikethrough', !data.params.strikethrough)} />
            <Button icon={MdFormatItalic} onClick={() => handleParamChange('italic', !data.params.italic)} />
          </ParameterElement>
        </>
      ) : (
        <>
          <ParameterElement>
            <SrcInput
              value={data.params.src || ''}
              onChange={(e) => handleParamChange('src', e.target.value)}
              placeholder="Image URL"
            />
          </ParameterElement>

          <ParameterElement>
            <SrcInput
              value={data.params.alt || ''}
              onChange={(e) => handleParamChange('alt', e.target.value)}
              placeholder="Image alt text"
            />
          </ParameterElement>
        </>
      )}
    </ParameterContainer>
  );
};

export default Parameters;
