import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import styled from "styled-components"
import myImg from "../images/aboutMeSEI.jpg"


export default function About() {

  const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Photo = styled.img`
    height: 30rem;
    width: 26rem;
    border-radius: 50%;
    border: 2px double #40506E;
    padding: 2px;
  `;

  const Bio = styled.div`
    width: 40%;
    margin-left: 3rem;
    font-size: 2rem;
    color: #383838;

  `;

  return (
    <Layout>
      <AboutContainer>
        <Photo src={myImg}/>
        <Bio>After working in restaurant management for x years (or something), I understand how to strategically solve complex problems. When I’m not writing code, I like to play 2K, cook new things, and spend early hours on the golf course. Let’s link up!</Bio>
      </AboutContainer>
      <Footer />
    </Layout>
  )
}