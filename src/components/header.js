import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../styles/media"


export default function Header() {
  
  const NavLinks = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 2%;
    width: 100%;

    ${media.m`
      justify-content: center;

    `}
   `;

  const ListLink = styled(Link)`
    display: inline-block;
    margin-right: 2.5rem;
    text-decoration: none;
    color: rgb(61, 116, 235);
    font-family: 'Roboto', sans-serif;

    &.name {
      font-size: 3.2rem;
      margin-right: auto;
    }
  `;

  return(
      <NavLinks>
          <ListLink className="name" to="/">jh.</ListLink>
          <ListLink>Home</ListLink>
          <ListLink className="about" to="/about/">About</ListLink>
          <ListLink className="contact" to="/contact/">Contact</ListLink>
      </NavLinks>
  )
}