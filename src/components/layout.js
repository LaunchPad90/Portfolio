import React from "react"
import styled from "styled-components"
import Footer from "./footer";
import Header from "./header"

export default function Layout({ children }) {

    const LayoutDiv = styled.div`
        display: flex;
        flex-direction: column;
    `;

  return (
    <LayoutDiv>
        <Header />
        {children}
        <Footer />
    </LayoutDiv>
  )
}