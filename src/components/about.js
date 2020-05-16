import React from 'react'
import styled from "styled-components"
import img from "../images/skate-hero.jpeg"
import media from "../styles/media"



export default function About(props) {
    
    const AboutTitle = styled.h1`
        text-align: center;
        font-size: 3rem;


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
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background: linear-gradient(
            to left bottom, 
            #6facd5af, 
            #283db4b7), 
            url(${img}
        );
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

        ${media.xl`
        `}

        ${media.m`
            height: 100%;
            clip-path: none;
        `}
    `;

    const AboutCard = styled.div`
        height: 21rem;
        width: 21rem;
        margin: 0 auto;
        background: white;
        text-align: center;
        box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        font-family: Roboto condensed, sans serif;

        ${media.l`
            height: 20rem;
            width: 20rem;
        `}

        ${media.m`
            height: 15rem;
            width: 13rem;
            margin: 0.3rem;
            flex-grow: 2;
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
            <AboutCard className="basketball">
                <AboutCardTitle>Basketball</AboutCardTitle>
                <AboutContent></AboutContent>
            </AboutCard>
        </AboutCardContainer>
    )
}
