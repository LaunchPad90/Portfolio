import React from 'react'
import styled from "styled-components"
import Layout from "../components/layout"
import media from "../styles/media"

export default function Contact(props) {

    const ContactPage = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `;

    const ContactCard = styled.div`
        display: flex;
        flex-direction: row;
        border: 10px solid green;
        height: 70vh;
        width: 70vw;
        box-shadow: 20px 20px 20px rgba(100, 100, 100, 0.8);

       

        ${media.m`
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
        width: 35%;

        ${media.m`
            height: 100%;
            width: 100%;
            flex-direction: row;
        `}
    `;

    const Photo = styled.img`
        border-radius: 50%;
        height: 40%;
        width: 80%;
        border: 3px solid black;

        ${media.m`
            height: 80%;

        `}
    `;

    const PersonalInfo = styled.div`
        border: 3px solid orange;
        height: 60%;
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
        border: 5px solid purple;
        width: 65%;

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
                        <Photo />
                        <PersonalInfo />
                    </CardLeft>
                    <CardRight></CardRight>
                </ContactCard>
            </ContactPage>
        </Layout>
    )
}
