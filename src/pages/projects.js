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

        background-position: top;
        background-attachment: fixed;
        no-repeat center;
        background-size: cover;

    `;
    return (
        <ProjectPage>
            <Layout>
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
            </Layout>
        </ProjectPage>
    )
}