import React from "react"
import styled from "styled-components"
import media from "../styles/media"
export default function Card(props) {

    const CardBox = styled.div`
        width: 28rem;;
        height: 38rem;
        perspective: 1000px;
        margin: 2rem;
        text-align: center;

        ${media.l`
            height: 25rem;
            width: 20rem;
        `}
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
        background: white;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
        font-family: Roboto Condensed, sans-serif;
        
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

        ${CardBox}:hover &:hover {
            cursor: pointer;
            
        }

        ${CardBox}.flipped, &.flipped {
            transform: rotateY(180deg);
            box-shadow: -20px 20px 25px rgba(50,50,50,.2);
        }
    `;

    const CardTitle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3.5rem;
        width: 100%;
        height: 40%;
        background: linear-gradient(
            to left bottom, 
            ${props.color1}, 
            ${props.color2}), 
            url(${props.projectImage}
            
        );
        color: white;
        background-position: top;
        background-size: cover;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

        ${media.l`
            font-size: 2rem;
        `}
    `;

    const CardContent = styled.div`
        width: 100%;
        font-size: 1.8rem;
        padding: 1rem;
        justify-self: flex-start;
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

        ${media.l`
            font-size: 1.5rem;
        `}
    `;

    // const CardImg = styled.video`
    //     width: 100%;
    //     height: 100%;
    // `;

    const Buttons = styled.div`
        display: inline-block;
        margin: 1rem;
        justify-content: flex-end;
        align-items: flex-end;
    `;

    const A = styled.a`
        margin: 1rem;
        text-decoration: none;
    `;

    const Flipped = (e) => {
        e.currentTarget.classList.toggle('flipped');
    }
    
    return (
        <CardBox>
            <Card onClick={Flipped}>
                <CardFront>
                    <CardTitle>{props.projectTitle}</CardTitle>
                    {/* <CardImg controls type="video/mp4" src={props.projectGif} /> */}
                    <ContentList>
                        <ListItem>{props.projectTech1}</ListItem>
                        <ListItem>{props.projectTech2}</ListItem>
                        <ListItem>{props.projectTech3}</ListItem>
                    </ContentList>
                </CardFront>
                <CardBack>
                    <CardContent>{props.projectContent}</CardContent>
                    <Buttons>
                        <button><A href={props.projectGif} target="blank">View Demo</A></button>
                        <button><A href={props.hosted} target="blank">View Hosted</A></button>
                        <button><A href={props.gitHub} target="blank">View Code</A></button>
                    </Buttons>
                </CardBack>
            </Card>
        </CardBox>
    )
}