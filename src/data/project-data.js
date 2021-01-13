import slot from "../images/slot.webp"
import food from "../images/food.webp"
import badapp from "../images/badapp.webp"
import golfImg from "../images/golf.webp"
import evolveImg from "../images/evolveGovernance.png"
import trainingTIme from '../images/trainingTime.png'
import fb from '../images/509fb.png'

import slotGif from "../images/slotMachine2.gif"
import smackTalkGif from "../images/smackTalk2.gif"
import badAppGif from "../images/badapp2.gif"
import foreCardGif from "../images/golf2.gif"
import evolveGif from '../images/evolveGovernance.gif'


export default [
    {
        title: "Evolve Governance",
        tech1: "WordPress",
        tech2: "PHP",
        tech3: "",
        content: "News site for non-profit, focusing on social innovation and governance.",
        image: `${evolveImg}`,
        gif: `${evolveGif}`,
        hosted: "https://evolvegovernance.com/",
    },
    {
        title: "Training Time",
        tech1: "React.js",
        tech2: "MailChimp API",
        tech3: "NetlifyCMS",
        content: "Personal trainer website with access to all available services, including youth camps, adult training services, monthly newsletter, and meal plan/meal prep education.",
        image: `${trainingTIme}`,
        gif: `${trainingTIme}`,
        gitHub: "https://github.com/LaunchPad90/training-time",
        hosted: "https://trainingtime.netlify.app/"
    },
    {
        title: "509 Fingerboards",
        tech1: "React.js",
        tech2: "GraphQL",
        tech3: "Prisma",
        content: "E-commerce site for small business in Spokane, WA. Focusing on the custom, hand made, decks with hopes to grow the business.",
        image: `${fb}`,
        gif: `${fb}`,
        gitHub: "https://github.com/LaunchPad90/fingerboards",
        hosted: "https://509fb.netlify.app/"
    },
    {
        title: "FORE!-card",
        tech1: "React.js",
        tech2: "Express.js",
        tech3: "MongoDB",
        content: "Easy to use scorecard app, designed with a mobile first approach. This app wont help with your game, but it will help you see how bad you are...FORE!",
        image: `${golfImg}`,
        gif: `${foreCardGif}`,
        gitHub: "https://github.com/LaunchPad90/FORE-card",
        hosted: "https://fore-card.herokuapp.com/"
    },
    {
        title: "Smack-Talk",
        tech1: "Node.js",
        tech2: "Express.js",
        tech3: "MongoDB",
        content: "Do you love cooking? Do you hate viewing recipes on blog sites? This is the app for you. Enough talking, lets cook.",
        image: `${food}`,
        gif: `${smackTalkGif}`,
        gitHub: "https://github.com/LaunchPad90/Smack-Talk",
        hosted: "https://thawing-wave-87870.herokuapp.com/"
    },
    {
        title: "Bad App-app",
        tech1: "Python",
        tech2: "Django",
        tech3: "MongoDB",
        content: "A website designed for developers to post ideas and rate other app ideas. Guaranteed to help with your creativity.",
        image: `${badapp}`,
        gif: `${badAppGif}`,
        gitHub: "https://github.com/LaunchPad90/bad_app_app",
        hosted: "https://badapp-app.herokuapp.com/"
    },
    {
        title: "Slot Machine",
        tech1: "HTML",
        tech2: "CSS",
        tech3: "Javascript",
        content: "Simple browser game. This was my first attempt at writing javascript logic for a game.",
        image: `${slot}`,
        gif: `${slotGif}`,
        gitHub: "https://github.com/LaunchPad90/TombstoneSlotMachine",
        hosted: ""
    },
]