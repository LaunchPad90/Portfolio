import React from 'react'
import styled from "styled-components"

export default function Button({ children }) {

    const Button = styled.button`
        background-color: #3A5F85;
        color: white;
        padding: .5rem 2rem;
        display: inline-block;
        border-radius: 100px;
        font-size: 1rem;
        cursor: pointer;
    `;

    return (
        <Button>
            {children}
        </Button>
    )
}
