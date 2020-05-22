import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import styled from "styled-components"
import myImg from "../images/aboutMeSEI.webp"
import media from "../styles/media"


export default function About() {

  const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.m`
      flex-direction: column;
      margin-top: 2rem;
    `}
  `;

  const Photo = styled.img`
    height: 30rem;
    width: 26rem;
    border-radius: 50%;
    border: 2px double #40506E;
    padding: 2px;

    ${media.m`
      height: 20rem;
      width: 16rem;
    `}
  `;

  const Bio = styled.div`
    width: 40%;
    margin-left: 3rem;
    font-size: 2rem;
    color: #383838;

    ${media.m`
      font-size: 1.6rem;
      width: 80%;
    `}
  `;

  return (
    <Layout>
      <AboutContainer>
        <Photo src={myImg} alt="image of developer"/>
        <Bio>After managing restaurants for the past 5 years, I understand how to strategically solve complex problems. I love working with people and helping achieve team success. When I’m not writing code, I love getting out early for a round of golf, trying new recipes in the kitchen, and playing games online with my friends. Let’s link up!</Bio>
      </AboutContainer>
      <Footer />
    </Layout>
  )
}