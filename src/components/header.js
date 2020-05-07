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
    `;

    const ListLink = styled(Link)`
      display: inline-block;
      margin-right: 1rem;
    `;

  return(
    <header>
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