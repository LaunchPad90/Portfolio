import React from 'react'
import styled from "styled-components"
import img from "../images/skate-hero.jpeg"
import media from "../styles/media"



export default function About(props) {

    const AboutContainer = styled.div`
        height: 100%;
        width: 100%;
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
        background-position: top;
        background-attachment: fixed;
        clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);

        ${media.xl`
            height: 100vh;
        `}

        ${media.l`
            height: 100vh;
            font-size: 2rem;
        `}
    `;

    const AboutTitle = styled.div`
        text-align: center;
        font-size: 3rem;
        justify-self: flex-start;
        color: white;

        ${media.m`
            font-size: 2rem;
        `}
    `;

    const AboutMe = styled.div`
        font-size: 2rem;
        color: white;
        text-align: center;
        justify-content: center;

    `;

    const AboutCardContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        ${media.m`
            height: 70vh;
        `}
    `;

    const AboutCard = styled.div`
        height: 25rem;
        width: 25rem;
        margin: 1.7rem;
        background: white;
        text-align: center;
        box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${media.l`
            height: 20rem;
            width: 20rem;
        `}

        ${media.m`
            height: 15rem;
            width: 13rem;
            margin: 0.3rem;
        `}

        ${media.s`
            height: 13rem;
            width: 11rem;
            margin: 0.3rem;
        `}

       
    `;
    
    const AboutCardTitle = styled.h1`
        height: 100%;
        font-size: 2.5rem;
        color: rgba(23, 0, 201, 0.7);

        ${media.l`
            font-size: 1.5rem;
        `}
    `;

    const AboutContent = styled.p`
        height: 100%;
        font-size: 1.8rem;
        margin: .5rem;

        ${media.l`
            font-size: 1.2rem;
        `}
    `;

    return (
        <AboutContainer>
            <AboutTitle>A little bit about myself</AboutTitle>
            <AboutMe></AboutMe>
            <AboutCardContainer>
                <AboutCard>
                    <AboutCardTitle>Golf</AboutCardTitle>
                    <AboutContent>Golfing has become my absolute favortite past time. Let's link up for a round!</AboutContent>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>Skateboarding</AboutCardTitle>
                    <AboutContent></AboutContent>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>Cooking</AboutCardTitle>
                    <AboutContent></AboutContent>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>Basketball</AboutCardTitle>
                    <AboutContent></AboutContent>
                </AboutCard>
            </AboutCardContainer>
        </AboutContainer>
    )
}
