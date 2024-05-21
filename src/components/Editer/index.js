import SendData from "../../edition_components/SendData";
import DisplayData from "../../edition_components/DisplayData";
import { EditerStyle, BoxStyle, Placement } from "./style";
import { TitleComponent } from "../../edition_components/Title";
import TextComponent from "../../edition_components/Text";


const Editer = ({ data = [], width="54vw", title="Nouveau", display_title=false  }) => {

    console.log("DATTTAA", data);

    return (
        <EditerStyle width={width}>
            <BoxStyle >
                <TitleComponent title={ title } display_title={display_title} />
                <Placement length={data.length}>
                {data.map((element, index) => {
                    // Analyser chaque élément de votre tableau data en tant qu'objet JSON
                    const parsedElement = JSON.parse(element);
                    return (
                        <DisplayData
                            key={index}
                            componentName={parsedElement.componentName} // Supposant que parsedElement a une propriété componentName
                            params={{
                                ...parsedElement.params, // Supposant que parsedElement a une propriété params
                                index: index,
                                length: data.length
                            }}
                        />
                    );
                })}
                </Placement>
            </BoxStyle>
        </EditerStyle>
    );
}

export default Editer;