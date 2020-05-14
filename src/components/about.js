import React from 'react'
import styled from "styled-components"
import img from "../images/skate-hero.jpeg"
import media from "../styles/media"



export default function About(props) {

    const AboutContainer = styled.div`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;;
        font-family: 'Roboto Condensed, sans serif, monospace';
        font-size: 3rem;
        background: linear-gradient(
            to left bottom, 
            #6facd5af, 
            #283db4b7), 
            url(${img}
        );
        background-size: cover;
        background-attachment: fixed;
        clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    `;
    const AboutTitle = styled.h1`
        text-align: center;
        font-size: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: white;
    `;
    const AboutCardContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border: 10px solid green;
    `;
    const AboutCard = styled.div`
        height: 25rem;
        width: 25rem;
        margin: 2rem;
        background: white;
        text-align: center;
        box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);

        ${media.l`
            height: 15rem;
            width: 15rem;
            margin: 0.5rem;
        `}
    `;
    const AboutCardTitle = styled.div`
        font-size: 1rem;
    `;

    return (
        <AboutContainer>
            <AboutTitle>About me</AboutTitle>
            <AboutCardContainer>
                <AboutCard>
                    <AboutCardTitle>Golf</AboutCardTitle>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>Skateboarding</AboutCardTitle>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>Coding</AboutCardTitle>
                </AboutCard>
            </AboutCardContainer>
        </AboutContainer>
    )
}
