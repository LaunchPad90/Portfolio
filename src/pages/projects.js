import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import styled from "styled-components"
import projectData from "../data/project-data"

export default function Projects(props) {

    const CardContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        
    `;

    const ProjectPage = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            to left bottom, 
            #b8b9b8bd, 
            #424444af), 
            url('https://images.unsplash.com/photo-1550503990-2b7709fa6b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        );
        background-position: top;
        background-attachment: fixed;
        no-repeat center;
        background-size: cover;
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    `;
    return (
        <ProjectPage>
            <CardContainer>
                {projectData.map(project => (
                    <div key={project.title}>
                        <Card 
                            projectTitle={project.title}
                            projectTech1={project.tech1}
                            projectTech2={project.tech2}
                            projectTech3={project.tech3}
                            projectContent={project.content}
                            projectImage={project.image}
                            projectGif={project.gif}
                            color1={project.color1}
                            color2={project.color2}
                        />
                    </div>
                ))}
            </CardContainer>
        </ProjectPage>
    )
}