import Header from "../../components/Header";
import ElementOrder from "../../components/ElementOrder";
import Editer from "../../components/Editer";
import Parameters from "../../components/Parameters";
import { EditPageStyle, EditPageContainer } from "./style";

const EditPage = () => {
  return (
    <EditPageStyle>
      <Header />
      <EditPageContainer>
        <ElementOrder />
        <Editer />
        <Parameters />
      </EditPageContainer>
    </EditPageStyle>
  );
}

export default EditPage;