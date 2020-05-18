import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import GifModal from "../components/modal"
import Button from "../components/button"


export default function Card(props) {

    const CardBox = styled.div`
        width: 21rem;;
        height: 30rem;
        perspective: 1000px;
        margin: 3rem;
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
        padding-bottom: 1.5rem;
        
    `;

    const CardBack = styled.div`
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
        padding-bottom: 1.5rem;
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

        ${CardBox}.flipped, &.flipped {
            transform: rotateY(180deg);
            box-shadow: -20px 20px 25px rgba(50,50,50,.2);
        }
    `;

    const CardImageDiv = styled.div`
       width: 100%;
       height: 70%;
    `;

    const CardImage = styled.img`
        width: 100%;
        height: 100%;
    `;

    const CardTitle = styled.div`
        font-size: 2.2rem;
        margin-top: .5rem;
    `;

    const CardContent = styled.div`
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        padding: 1rem;
        justify-self: flex-start;
    `;

    const ContentList = styled.ul`
        height: 100%;
        width: 40%;
    `;

    const ListItem = styled.li`
        list-style: none;
        font-size: 1.4rem;
        padding: 1rem;

        &:not(:last-child) {
            border-bottom: 1px solid #707070;
        }

        ${media.l`
            font-size: 1.5rem;
        `}
    `;

    const Buttons = styled.div`
        display: inline-block;
        justify-content: flex-end;
        align-items: flex-end;
    `;

    const A = styled.a`
        text-decoration: none;
        color: white;
    `;

    const Flipped = (e) => {
        e.currentTarget.classList.toggle('flipped');
    }
    
    return (
        <CardBox>
            <Card onClick={Flipped}>
                <CardFront>
                    <CardImageDiv>
                        <CardImage src={props.projectImage}/>
                    </CardImageDiv> 
                    <CardTitle>{props.projectTitle}</CardTitle>
                    {/* <CardImg controls type="video/mp4" src={props.projectGif} /> */}
                    <ContentList>
                        <ListItem>{props.projectTech1}</ListItem>
                        <ListItem>{props.projectTech2}</ListItem>
                        <ListItem>{props.projectTech3}</ListItem>
                    </ContentList>
                    <Button>View More</Button>
                </CardFront>
                <CardBack>
                    <CardContent>{props.projectContent}</CardContent>
                    <Buttons>
                        <GifModal 
                            gif={props.projectGif}
                            title={props.projectTitle}
                        />
                        <Button><A href={props.gitHub} target="blank">View Code</A></Button>
                    </Buttons>
                </CardBack>
            </Card>
        </CardBox>
    )
}