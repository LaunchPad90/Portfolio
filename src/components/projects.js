import React from "react"
import Card from "./card"
import styled from "styled-components"
import projectData from "../data/project-data"
import media from "../styles/media"

export default function Projects(props) {

    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `;

    

    return (
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
    )
}