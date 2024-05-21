import styled from "styled-components";

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 100%;
    padding: 0 5px;
`;

const SmallLine = styled.div`
    width: 70%;
    height: 1px;
    background-color: white;
    border-radius: 100%;
    padding: 0 5px;
`;

const VLine = styled.div`
    width: 2px;
    height: 80%;
    background-color: white;

    padding: 5px 0;
`;

const VLineBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const VerticalLine = () => {
    return (
        <VLineBox>
            <VLine />
        </VLineBox>
    );
}

export { Line, SmallLine, VerticalLine };