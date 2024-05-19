import SendData from "../../edition_components/SendData";
import DisplayData from "../../edition_components/DisplayData";
import { EditerStyle, BoxStyle, Placement } from "./style";
import { TitleComponent } from "../../edition_components/Title";


const Editer = ({ data = [] }) => {

    return (
        <EditerStyle>
            <BoxStyle >
                <TitleComponent title={ "Test" } />
                <Placement />
            </BoxStyle>
        </EditerStyle>
    );
}

export default Editer;