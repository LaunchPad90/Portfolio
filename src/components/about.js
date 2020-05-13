import React from 'react'
import "../styles/about.css"

export default function About(props) {
    return (
        <div className="about-container">
                <h1 className="about-title">About me</h1>
            <div className="about-container__card-container">
                <div className="about-container__card card1">Golf</div>
                <div className="about-container__card card2">Skateboarding</div>
                <div className="about-container__card card3">Coding</div>
            </div>
        </div>
    )
}
