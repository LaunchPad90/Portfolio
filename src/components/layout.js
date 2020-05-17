import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"




export default function Layout({ children }) {

    const LayoutDiv = styled.div`
        margin: 0;
        padding; 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    `;

  return (
    <LayoutDiv>
        <Header />
        {children}
        <Footer />
    </LayoutDiv>
  )
}