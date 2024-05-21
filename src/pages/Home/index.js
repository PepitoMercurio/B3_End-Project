import {HomeStyle, ProjectsList, ProjectCard, ProjectTitle} from "./style";
import React, {useState} from 'react';
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    axios({
        method: 'GET',
        url: 'http://localhost:3001/projects',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    }).then((response) => {
        setProjects(response.data);
    }).catch((error) => {
        console.log(error);
    });

    return (
        <HomeStyle>
            <Header />
            <ProjectsList>
                {projects.map((project) => (
                    <ProjectCard key={project._id} onClick={() => navigate(`/${project._id}`)}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                    </ProjectCard>
                ))}
            </ProjectsList>
        </HomeStyle>
    );
}

export default Home;