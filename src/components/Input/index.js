import { InputContainer, InputText, InputStyle } from './style';

const Input = ({ text, value, onChange }) => {
  return (
    <InputContainer>
        <InputText>{text}</InputText>
        <InputStyle
            value={value}
            onChange={onChange}
        />
    </InputContainer>
  );
}

export default Input;