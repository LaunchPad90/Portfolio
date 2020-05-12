import React from "react"
import styled from "styled-components"
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
`;

  const ListLink = styled(Link)`
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
    color: rgb(61, 116, 235);
  `;

  return(
      <NavLinks>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
      </NavLinks>
  )
}