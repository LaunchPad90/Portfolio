import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import {FaExternalLinkAlt, FaLinkedin, FaGithub} from "react-icons/fa";


export default function Footer() {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 1rem;
        position: relative;

    `;
    
    const FooterLink = styled(Link)`
        margin: 1rem;
        color: #3A5F85;
        text-decoration: none;
        font-size: 1.5rem;
        border: 2px solid #40506E;
        border-radius: 40px;

        &.linkedin, &.github {
            padding: .5rem .8rem;
        }

        &.resume {
            padding: .5rem 2rem;
        }

    `;
    return (
        <Div>
            <FooterLink className="resume">Resume <FaExternalLinkAlt size={16}/></FooterLink>
            <FooterLink className="linkedin"><FaLinkedin size={18}/></FooterLink>
            <FooterLink className="github"><FaGithub size={18}/></FooterLink>
        </Div>
    )
}
