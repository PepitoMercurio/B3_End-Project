import styled from "styled-components";

const HomeStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    background-color: #4F4F4F;
    color: white;
`;

const ProjectsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    padding: 5px 32px;
`;

const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 20rem;
    background: linear-gradient(#D9D9D9 0%, #737373 100%);
    color: black;
    padding: 5px 32px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.5s ease, transform 0.5s ease;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1));

    &:hover {
        background: linear-gradient(#8E8E8E 0%, #2E2E2E 100%);
        transform: scale(1.05);
    }
`;

const ProjectTitle = styled.h1`
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
`;

export { HomeStyle, ProjectsList, ProjectCard, ProjectTitle };