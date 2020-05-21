import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../styles/media"


export default function Header() {
  
  const NavLinks = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem 2%;
    width: 100%;

    ${media.m`
      justify-content: center;
      font-size: 1.6rem;

    `}
   `;

  const ListLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: #383838;
    font-family: Roboto, sans serif, monospace;

    &.active {
      border-bottom: 2px solid #383838;
    }

    &#name {
      font-size: 3.2rem;
      margin-right: auto;
      color: #3A5F85;

      &.active {
        border-bottom: none;
      }

      ${media.m`
        font-size: 2.5rem;
      `}
    }

    &#home, &#about {
      margin-right: 2rem;
    }
  `;

  return(
      <NavLinks>
          <ListLink id="name" activeClassName="active" to="/">Jacob Hickey</ListLink>
          <ListLink id="home" activeClassName="active">Home</ListLink>
          <ListLink id="about" activeClassName="active" to="/about/">About</ListLink>
          <ListLink id="contact" activeClassName="active" to="/contact/">Contact</ListLink>
      </NavLinks>
  )
}