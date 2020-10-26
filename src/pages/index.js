import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import img from "../images/skate-hero.webp";
import Layout from "../components/layout";
import Projects from "../components/projects";
import media from "../styles/media";

import "../styles/global.css";
import Footer from "../components/footer";

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
    height: 50vh;
    background: linear-gradient(to left bottom, #7597d380, #7597d380),
      url(${img});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    clip-path: polygon(2% 0, 98% 0, 98% 80%, 2% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.l`
      height: 70vh;
    `}
  `;

  const HeroTextBox = styled.div`
    text-align: center;
    align-self: center;
    justify-content: center;
    color: white;
    font-family: Roboto Condensed, sans-serif;
    margin-bottom: 2rem;
  `;

  const HeroTextMain = styled.span`
    display: block;
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
    animation: ${moveInLeft} 1s ease-out;

    ${media.l`
      font-size: 4rem;
      width: 100vw;
    `}

    ${media.s`
      font-size: 2rem;
    `}
  `;

  const HeroTextSub = styled.span`
    display: block;
    padding: 2%;
    margin: 0 1rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    animation: ${moveInRight} 1s ease-out;

    ${media.l`
      font-size: 2rem;
      letter-spacing: .2rem;
      width: 100vw;
    `}

    ${media.s`
      font-size: 1rem;
    `}
  `;

  const ProjectHeader = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin-top: 1.3rem;
    color: #383838;

    ${media.l`
            font-size: 2rem;
        `}
  `;
  return (
    <div>
      <Layout>
        <Hero>
          <HeroTextBox>
            <HeroTextMain>Denver Based Developer</HeroTextMain>
            <HeroTextSub>
              Mainly hacking around in React, challenging myself on codewars and
              learning new libraries and frameworks that interest me.
            </HeroTextSub>
          </HeroTextBox>
        </Hero>
        <ProjectHeader>View my Recent Work</ProjectHeader>
        <Projects />
        <Footer />
      </Layout>
    </div>
  );
}
