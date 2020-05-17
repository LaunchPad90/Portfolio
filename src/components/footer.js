import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import {FaExternalLinkAlt, FaLinkedin, FaGithub} from "react-icons/fa";


export default function Footer() {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        margin: 1rem;
    `;
    
    const FooterLink = styled(Link)`
        margin: 1rem;
        color: #3A5F85;
        text-decoration: none;
        font-size: 1.5rem;
    `;
    return (
        <Div>
            <FooterLink>Resume <FaExternalLinkAlt size={16}/></FooterLink>
            <FooterLink><FaLinkedin size={16}/></FooterLink>
            <FooterLink><FaGithub size={16}/></FooterLink>
        </Div>
    )
}
