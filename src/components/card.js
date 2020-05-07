import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Card(props) {

    const CardDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        margin: 1rem;
        width: 40vw;
        height: 50vh;
    `;

    const CardTitle = styled.h1`
        font-size: 3rem;
        margin-bottom: 20rem;
    `;

    const CardContent = styled.p`
        font-size: 1.8rem;
        height: 80%;
    `;
    return (
        <CardDiv>
            <CardTitle>{props.projectTitle}</CardTitle>
            <CardContent>{props.projectContent}</CardContent>
        </CardDiv>
    )
}