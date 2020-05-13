import React from 'react'
import styled from "styled-components"
import { keyframes } from "styled-components"

export default function Button({ children }) {
    
    const moveInBtn = keyframes`
    0% {
        opacity: 0;
        transform: translatey(3rem);
    }

    80% {
        transform: translateY(-1rem)
    }

    100% {
        opacity: 1;
        transform: translate(0)
    }
  `;

    const ProjectsBtn = styled.button`
        background-color: #fff;
        padding: 1.5rem 2rem;
        display: inline-block;
        border-radius: 100px;
        animation: ${moveInBtn} .5s ease-out .75s;
        animation-fill-mode: backwards;
        font-size: 2rem;
    `;

    return (
        <ProjectsBtn>
            {children}
        </ProjectsBtn>
    )
}
