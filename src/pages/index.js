import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import img from "../images/skate-hero.jpeg"
import Layout from "../components/layout"
import Projects from "../components/projects"
import media from "../styles/media"

import "../styles/global.css"



export default function Home() {

  const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50rem) rotate(-40deg);
    }

    80% {
        transform: translateX(1rem)
    }

    100% {
        opacity: 1;
        transform: translate(0)
    }
  `;

  const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(50rem) rotate(100deg);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
  `;

  const Hero = styled.div`
    position: relative;
    height: 60%;
    background: linear-gradient(
      to left bottom, 
      #6facd5af, 
      #283db4b7), 
      url(${img}
  );
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    clip-path: polygon(2% 0, 98% 0, 98% 80%, 2% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const HeroTextBox = styled.div`
    text-align: center;
    align-self: center;
    justify-content: center;
    color: white;
  `;

  const HeroPrimaryMain = styled.span`
    display: block;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 1rem;
    margin-bottom: 2rem;
    animation: ${moveInLeft} 1s ease-out;

    ${media.m`
      font-size: 2rem;
      width: 100vw;
    `}
  `;

  const HeroPrimarySub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: .5rem;
    text-transform: uppercase;
    animation: ${moveInRight} 1s ease-out;

    ${media.m`
      font-size: 2rem;
      letter-spacing: .2rem;
      width: 100vw;
    `}
  `;

  const ProjectHeader = styled.h1`
        font-size: 3rem;
        text-align: center;
        margin-top: 1.3rem;

        ${media.m`
            font-size: 2rem;
        `}
    `;
  return (
    <div>
      <Layout>
        <Hero>
          <HeroTextBox>
              <HeroPrimaryMain>Jacob Hickey</HeroPrimaryMain>
              <HeroPrimarySub>denver based developer</HeroPrimarySub> 
              <HeroPrimarySub>focused on the front-end</HeroPrimarySub> 
          </HeroTextBox>
        </Hero>
        <ProjectHeader>View my recent works</ProjectHeader>
        <Projects />
      </Layout>
    </div>
  );
}