import React from 'react'
import styled from "styled-components"
import {FaExternalLinkAlt, FaLinkedin, FaGithub} from "react-icons/fa";


export default function Footer() {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        margin: 1rem;
        bottom: 0;

    `;
    
    const FooterLink = styled.a`
        margin: 1rem;
        color: #3A5F85;
        text-decoration: none;
        font-size: 1.5rem;
        border: 2px solid #40506E;
        border-radius: 40px;
        display: flex;
        align-items: center;

        &:hover {
            background: #3A5F85;
            color: white;
        }

        &.linkedin, &.github {
            padding: .5rem .8rem;
        }

        &.resume {
            padding: .5rem 2rem;
        }
    `;
    return (
        <Div>
            <FooterLink href="https://drive.google.com/file/d/1zkEy9iSKmBzZfPEsfGXeu7LWL1KCDttA/view?usp=sharing" target="blank" className="resume">Resume <FaExternalLinkAlt style={{marginLeft: `.5rem`}} size={16}/></FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jacob-hickey-8140b4197/" target="blank" className="linkedin"><FaLinkedin size={18}/></FooterLink>
            <FooterLink href="https://github.com/LaunchPad90?tab=repositories" target="blank" className="github"><FaGithub size={18}/></FooterLink>
        </Div>
    )
}
