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
        width: 100vw;
        margin-top: 5rem;
    `;

    const Div = styled.div`
        background-color: grey;
    `;

    return (
        <Div>
        <Layout>
            <CardContainer>
                {projectData.map(project => (
                    <div key={project.title}>
                        <Card 
                            cardImg={project.gif}
                            projectTitle={project.title}
                            projectContent={project.content}
                        />
                    </div>
                ))}
            </CardContainer>
        </Layout>
        </Div>
    )
}