import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./header";



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
    </LayoutDiv>
  )
}