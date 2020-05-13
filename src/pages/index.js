import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"
import img from "../images/skate-hero.jpeg"
import Button from "../components/button"

import "../styles/global.css"
import Layout from "../components/layout"
import Projects from "./projects"
import About from "../components/about"



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
    height: 100vh;
    background: linear-gradient(
        to left bottom, 
        #6facd5af, 
        #283db4b7), 
        url(${img}
    );
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
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

  const ProjectBtn = styled(Link)`
    font-family: Courier New, Courier, monospace;
    text-transform: uppercase;
    text-decoration: none;
    color: #283db4b7;
  `;

  return (
    <div>
      <Layout>
        <Hero>
          <HeroTextBox>
            <HeroPrimary>
              <HeroPrimaryMain>Jacob Hickey</HeroPrimaryMain>
              <HeroPrimarySub>Web Developer</HeroPrimarySub>
            </HeroPrimary>
            <Button>
              <ProjectBtn to="/projects/">View Projects</ProjectBtn>
            </Button>
          </HeroTextBox>
        </Hero>
      </Layout>
      <About />
      <Projects />
    </div>
  );
}