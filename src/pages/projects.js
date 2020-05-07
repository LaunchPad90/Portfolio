import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Card from "../components/card"
import styled from "styled-components"

export default function Projects() {

    const CardContainer = styled.div`
        margin: 1rem;
        display: flex;
        flex-direction: row;
        width: 100rem;
        height: 100rem;
    `;

    return (
        <Layout>
           
                <Header headerText="Projects page" />
                <CardContainer>
                    <Card 
                        projectTitle="Slot Machine"
                        projectContent="Content"
                    />
                    <Card 
                        projectTitle="Smack-Talk"
                    />
                </CardContainer>
            
        </Layout>
    )
}