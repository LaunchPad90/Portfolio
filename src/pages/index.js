import React from "react"
import Layout from "../components/layout";
import styled from "styled-components"
import { keyframes } from "styled-components"

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

  const Hero = styled.header`
    position: relative;
    height: 95vh;
    margin-top: 3.5rem;
    background: linear-gradient(
        to left bottom, 
        #6facd5af, 
        #283db4b7), 
        url('../img/hero-skate.jpeg'
    );
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  `;

  const HeroTextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `;

  const HeroPrimary = styled.h1`
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    backface-visibility: hidden;
    margin-bottom: 6rem;
  `;

  const HeroPrimaryMain = styled.span`
    display: block;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 2.5rem;
    animation: ${moveInLeft} 1s ease-out;
  `;

  const HeroPrimarySub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1rem;
    animation: ${moveInRight} 1s ease-out;
  `;

  return (
    <Layout>
         <Hero>
          <HeroTextBox>
            <HeroPrimary>
              <HeroPrimaryMain>Jacob Hickey</HeroPrimaryMain>
              <HeroPrimarySub>Web Developer</HeroPrimarySub>
            </HeroPrimary>
          </HeroTextBox>
         </Hero>
    </Layout>
  );
}