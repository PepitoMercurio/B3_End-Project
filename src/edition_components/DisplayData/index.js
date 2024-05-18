import DataMap from "../DataMap";

const DisplayData = ({ componentName, params }) => {
    const ComponentToRender = DataMap[componentName];

    if (!ComponentToRender) {
        console.error(`Component ${componentName} does not exist in DataMap`);
        return null; // or render a fallback component or error message
    }

    return (<ComponentToRender {...params} />);
};

export default DisplayData;