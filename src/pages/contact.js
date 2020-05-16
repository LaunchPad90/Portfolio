import React from 'react'
import styled from "styled-components"
import Layout from "../components/layout"
import media from "../styles/media"

import myPhoto from "../images/aboutMeSEI.jpg"
import About from '../components/about'

export default function Contact(props) {

    const ContactPage = styled.div`
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    `;

    const ContactCard = styled.div`
        display: flex;
        height: 70vh;
        width: 70vw;
        border: 10px solid orange;
        box-shadow: 20px 20px 20px rgba(100, 100, 100, 0.8);

        ${media.l`
            flex-direction: column;
            width: 100%;
        `}
    `;

    const CardLeft = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 5px solid yellow;
        width: 45%;
        background: rgba(197, 208, 0, 0.5);

        ${media.m`
            height: 100%;
            width: 100%;
            flex-direction: row;
        `}
    `;

    const Photo = styled.img`
        border: 6px solid white;
        height: 100%;
        width: 100%;

        ${media.m`
            height: 80%;

        `}
    `;

    const PersonalInfo = styled.div`
        border: 3px solid orange;
        height: 40%;
        width: 100%;

        ${media.m`
            height: 80%;
        `}
    
    `;

    const CardRight = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55%;

        ${media.m`
            height: 100%;
            width: 100%;
        `}
    `;
    return (
        <Layout>
            <ContactPage>
                <ContactCard>
                    <CardLeft>
                        <Photo src={myPhoto}/>
                        <PersonalInfo />
                    </CardLeft>
                    <CardRight>
                        <About />
                    </CardRight>
                </ContactCard>
            </ContactPage>
        </Layout>
    )
}
