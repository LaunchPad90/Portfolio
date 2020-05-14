import React from 'react'
import "../styles/about.css"


export default function About(props) {
    return (
        <div className="about-container">
            <h1 className="about-title">About me</h1>
            <div className="about-container__card-container">
                <div className="about-container__card card1">
                    <div className="about-container__card-title">Golf</div>
                </div>
                <div className="about-container__card card2">
                    <div className="about-container__card-title">Skateboarding</div>
                </div>
                <div className="about-container__card card3">
                    <div className="about-container__card-title">Coding</div>
                </div>
            </div>
        </div>
    )
}
