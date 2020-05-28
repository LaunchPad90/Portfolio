import React from "react"
import styled from "styled-components"
import Header from "./header"

export default function Layout({ children }) {

    const LayoutDiv = styled.div`
        margin: 0;
        padding; 0;
        display: flex;
        flex-direction: column;
        width: 100vw;
    `;

  return (
    <LayoutDiv>
        <Header />
        {children}
    </LayoutDiv>
  )
}