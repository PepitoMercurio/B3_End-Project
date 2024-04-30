import { ElementOrderContainer } from "./style";
import { Title } from "../Title";
import { Line } from "../Line";
import PageOrder from "../PageOrder";

const ElementOrder = () => {
    return (
        <ElementOrderContainer>
            <Title>Pages</Title>
            <Line />
            <PageOrder />
            <PageOrder />
            <PageOrder />
        </ElementOrderContainer>
    );
}

export default ElementOrder;