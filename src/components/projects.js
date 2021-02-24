import React from "react"
import Card from "./card"
import styled from "styled-components"
import projectData from "../data/project-data"

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
                        p={project}
                    />
                </div>
            ))}
        </CardContainer>
    )
}