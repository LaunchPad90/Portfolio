import React from "react"
import styled from "styled-components"

export default function Card(props) {

    const CardDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        margin: 1rem;
        width: 30vw;
        height: 80vh;
        background: white;
    `;

    const CardTitle = styled.h1`
        font-size: 3rem;
    `;

    const CardContent = styled.p`
        font-size: 1.8rem;
        padding: 1rem;
    `;

    const CardImg = styled.img`
        width: 100%;
        height: 50%;
        
    `;

    return (
        <CardDiv>
            <CardImg src={props.cardImg}/>
            <CardTitle>{props.projectTitle}</CardTitle>
            <CardContent>{props.projectContent}</CardContent>
        </CardDiv>
    )
}