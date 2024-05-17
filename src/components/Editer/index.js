import SendData from "../EditionComponents/SendData";
import DisplayData from "../EditionComponents/DisplayData";
import { EditerStyle, BoxStyle } from "./style";


const Editer = () => {
    return (
        <EditerStyle>
            <SendData />
            <BoxStyle />
            <DisplayData componentName="TitleComponent" params={{ title: "Hello World" }} />
        </EditerStyle>
    );
}

export default Editer;