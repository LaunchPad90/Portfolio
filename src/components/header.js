import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../styles/media"


export default function Header() {
  
  const NavLinks = styled.ul`
    list-style: none;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    padding: 1rem;
    width: 100%;

    ${media.m`

      justify-content: center;

    `}
   `;

  const ListLink = styled(Link)`
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
    color: rgb(61, 116, 235);
    font-family: 'Roboto Condensed', sans-serif;
  `;

  return(
      <NavLinks>
          <ListLink className="name" to="/">Home</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
      </NavLinks>
  )
}