import React from "react"
import Card from "../components/card"
import styled from "styled-components"
import projectData from "../data/project-data"
import media from "../styles/media"

export default function Projects(props) {

    const CardContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    `;

    const ProjectPage = styled.div`
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to left bottom, 
            #b8b9b8bd, 
            #424444af), 
        );
    `;
    return (
        <ProjectPage>
            <h1>Projects</h1>
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
                            gitHub={project.gitHub}
                            hosted={project.hosted}
                        />
                    </div>
                ))}
            </CardContainer>
        </ProjectPage>
    )
}