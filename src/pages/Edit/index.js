import Header from "../../components/Header";
import ElementOrder from "../../components/ElementOrder";
import { EditPageStyle, EditPageContainer } from "./style";

const EditPage = () => {
  return (
    <EditPageStyle>
      <Header />
      <EditPageContainer>
        <ElementOrder />
      </EditPageContainer>
    </EditPageStyle>
  );
}

export default EditPage;