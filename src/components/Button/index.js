import { ButtonStyle } from "./style";

const Button = ({ icon: Icon , onClick }) => {
    return (
        <ButtonStyle onClick={onClick}>
            <Icon />
        </ButtonStyle>
    );
}

export default Button;