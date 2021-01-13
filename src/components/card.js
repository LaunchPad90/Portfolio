import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import GifModal from "../components/modal"
import Button from "../components/button"


export default function Card(props) {

    const CardBox = styled.div`
        width: 21rem;;
        height: 32rem;
        perspective: 1000px;
        margin: 3rem;
        text-align: center;
    `;

    const CardFront = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1.5rem;
    `;

    const CardBack = styled.div`
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        box-shadow: 10px 10px 15px rgba(50,50,50,.5);
        border-radius: 10px;
        

        ${CardFront}, ${CardBack} {
            position: absolute;
            backface-visibility: hidden;
            width: 100%;
            height: 100%;
        }

        ${CardBox}.flipped, &.flipped {
            transform: rotateY(180deg);
            box-shadow: -10px 10px 15px rgba(50,50,50,.2);
        }
    `;

    const CardImage = styled.div`
        width: 100%;
        height: 20rem;
        margin-bottom: 1.5rem;
        border-radius: 10px 10px 0 0;
        background-image: url(${(props) => props.projectImageSrc});
        background-size: cover;
        background-position: center center;
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
        display: flex;
        align-items: center;
    `;

    const ContentList = styled.ul`
        height: 100%;
        width: 60%;
        margin-top: 1rem;
    `;

    const ListItem = styled.li`
        list-style: none;
        font-size: 1.4rem;
        padding: 1rem;
        color: #5C5C5C;

        &:not(:last-child) {
            border-bottom: 1px solid #383838;
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
        background-color: white;
        color: #3A5F85;
        border: 2px solid #3A5F85;
        padding: .5rem 2rem;
        display: inline-block;
        border-radius: 100px;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        margin-top: .5rem;
`;

    const Flipped = (e) => {
        e.currentTarget.classList.toggle('flipped');
    }
    
    return (
        <CardBox>
            <Card onClick={Flipped}>
                <CardFront>
                    <CardImage projectImageSrc={props.projectImage} />
                    <CardTitle>{props.projectTitle}</CardTitle>
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
                            hosted={props.hosted}
                        />
                        {props.gitHub !== props.github ?
                            <A href={props.gitHub} target="blank">View Code</A>
                            :
                            <A style={{display: 'none'}}></A>
                        }
                    </Buttons>
                </CardBack>
            </Card>
        </CardBox>
    )
}