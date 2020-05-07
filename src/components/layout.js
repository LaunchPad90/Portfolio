import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {

    const LayoutDiv = styled.div`
        margin: 0;
        padding; 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    `;

    const Header = styled.header`
        margin-bottom: 1.5rem;
        
    `;

    const Ul = styled.ul`
        list-style: none;
        font-size: 2rem;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    `;

  return (
    <LayoutDiv>
        <Header>
            <Ul>
                <Link to="/" style={{ marginRight: `1rem` }}>
                    <h3 style={{ display: `inline` }}>Jacob Hickey</h3>
                </Link>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
            </Ul>
        </Header>
        {children}
    </LayoutDiv>
  )
}