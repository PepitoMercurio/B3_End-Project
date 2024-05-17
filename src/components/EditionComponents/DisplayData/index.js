import DataMap from "../DataMap";

const DisplayData = ({ componentName, params }) => {
    const ComponentToRender = DataMap[componentName];

    return (<ComponentToRender {...params} />);
};

export default DisplayData;