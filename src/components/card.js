import React from "react"
import styled from "styled-components"

export default function Card(props) {

    const CardBox = styled.div`
        width: 28rem;;
        height: 50rem;
        perspective: 1000px;
        margin: 2rem;
        text-align: center;
    `;

    const CardFront = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        background: rgba(245, 245, 245, 0.6);
    `;

    const CardBack = styled.div`
        background: rgba(245, 245, 245, 0.8);
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
        box-shadow: 20px 20px 25px rgba(50,50,50,.2);


       

        ${CardFront}, ${CardBack} {
            position: absolute;
            backface-visibility: hidden;
            width: 100%;
            height: 100%;
        }

        ${CardBox}:hover, &:hover {
            transform: rotateY(180deg);
            
        }
    `;

    const CardTitle = styled.h1`
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3rem;
        width: 100%;
        height: 40%;
        background: linear-gradient(
            to left bottom, 
            ${props.color1}, 
            ${props.color2}), 
            url(${props.projectImage}
            
        );
        color: #fca;
        background-position: top;
        background-size: cover;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)
    `;

    const CardContent = styled.div`
        width: 100%;
        font-size: 1.8rem;
        padding: 1rem;
    `;

    const ContentList = styled.ul`
        width: 80%;
    `;

    const ListItem = styled.li`
        list-style: none;
        font-size: 2.5rem;
        padding: 1rem;

        &:not(:last-child) {
            border-bottom: 1px solid grey;
        }
    `;

    const CardImg = styled.img`
        width: 100%;
        height: 100%;

    `;
    
    return (
        <CardBox>
            <Card>
                <CardFront>
                    <CardTitle>{props.projectTitle}</CardTitle>
                    <ContentList>
                        <ListItem>{props.projectTech1}</ListItem>
                        <ListItem>{props.projectTech2}</ListItem>
                        <ListItem>{props.projectTech3}</ListItem>
                    </ContentList>
                </CardFront>
                <CardBack>
                    <CardImg src={props.projectGif}/>
                    <CardContent>{props.projectContent}</CardContent>
                </CardBack>
            </Card>
        </CardBox>
    )
}