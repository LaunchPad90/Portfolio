import React from "react"
import styled from "styled-components"

export default function Card(props) {

    const CardContainer = styled.div`
        width: 400px;
        height: 500px;
        perspective: 1000px;
        margin: 1rem;
       
    `;

    const CardFront = styled.div`
        background: rgb(47, 75, 165);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    `;

    const CardBack = styled.div`
        background: rgb(121, 179, 255);
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
    `;
    
    const Card = styled.div `
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;

        ${CardFront}, ${CardBack} {
            position: absolute;
            backface-visibility: hidden;
            width: 100%;
            height: 100%;
        }

        ${CardContainer}:hover, &:hover {
            transform: rotateY(180deg);
        }
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
        height: 100%;
        
    `;

    return (
        <CardContainer>
            <Card>
                <CardFront>
                    <CardTitle>{props.projectTitle}</CardTitle>
                    <CardContent>{props.projectContent}</CardContent>
                </CardFront>
                <CardBack>
                    <CardImg src={props.cardImg}/>
                </CardBack>
            </Card>
        </CardContainer>
    )
}