import SendData from "../../edition_components/SendData";
import DisplayData from "../../edition_components/DisplayData";
import { EditerStyle, BoxStyle } from "./style";
import { Title } from "../Title";


const Editer = ({ data = [] }) => {

    console.log('DATA', data);


    return (
        <EditerStyle>
            <SendData />
            <BoxStyle >
                <DisplayData componentName={ data.components } params={data.params} />
            </BoxStyle>
        </EditerStyle>
    );
}

export default Editer;