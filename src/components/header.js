import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


export default function Header() {

  const NavLinks = styled.ul`
        list-style: none;
        font-size: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: relative;
    `;

    const ListLink = styled(Link)`
      display: inline-block;
      margin-right: 1rem;
      text-decoration: none;
    `;

  return(
    <header style={{ marginBottom: `1.5rem`, position: `fixed`, width: `100vw` }}>
      <NavLinks>
          <ListLink to="/">
              <h3 style={{ display: `inline` }}>Jacob Hickey</h3>
          </ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
      </NavLinks>
    </header>
  )
}