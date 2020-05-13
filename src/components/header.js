import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"


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
   `;

  const ListLink = styled(Link)`
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
    color: rgb(61, 116, 235);

    &:hover {
      background: rgb(61, 116, 235);
      color: white;
    }
  `;

  return(
      <NavLinks>
          <ListLink className="name" to="/">Home</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
      </NavLinks>
  )
}