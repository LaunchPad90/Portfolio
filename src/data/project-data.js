import vegas from "../images/vegas.png"
import steak from "../images/steak.png"
import badappapp from "../images/badappapp.png"
import golfImg from "../images/forecard-image.png"
import slotGif from "../images/slotGif.mp4"
import smackTalkGif from "../images/smack-talk-gif.mp4"

export default [
    {
        title: "Slot Machine",
        tech1: "HTML",
        tech2: "CSS",
        tech3: "Javascript",
        content: "Simple browser game. This was my first attempt at writing javascript logic for a game. This project was completed in 1 week and is deployed on Github pages.",
        image: `${vegas}`,
        gif: `${slotGif}`,
        color1: "rgba(72, 103, 228, 0.4)",
        color2: "rgba(27, 60, 191, 0.8)",
        gitHub: "https://github.com/LaunchPad90/TombstoneSlotMachine",
        hosted: ""
    },

    {
        title: "Smack-Talk",
        tech1: "Node.js",
        tech2: "Express.js",
        tech3: "MongoDB",
        content: "Do you love cooking? Do you hate viewing recipes on blog sites? This is the webapp for you. Enough talking, lets cook.",
        image: `${steak}`,
        gif: `${smackTalkGif}`,
        color1: "rgba(150, 0, 200, 0.4)",
        color2: "rgba(124, 59, 220, 0.8)",
        gitHub: "https://github.com/LaunchPad90/Smack-Talk",
        hosted: ""
    },

    {
        title: "Bad App-app",
        tech1: "Python",
        tech2: "Django",
        tech3: "MongoDB",
        content: "A website designed for developers to post ideas and rate other app ideas. Looking for a time waster, something to make you laugh? Come and check out our app, guaranteed to help with your creativity.",
        image: `${badappapp}`,
        gif: "",
        color1: "rgba(255, 0, 12, 0.4)",
        color2: "rgba(255, 168, 96, 0.8)",
        gitHub: "https://github.com/LaunchPad90/bad_app_app",
        hosted: ""
    },

    {
        title: "FORE!-card",
        tech1: "React.js",
        tech2: "Express.js",
        tech3: "MongoDB",
        content: "Easy to use scorecard app.",
        image: `${golfImg}`,
        gif: "",
        color1: "rgba(85, 197, 122, 0.4)",
        color2: "rgba(21, 157, 62, 0.8)",
        gitHub: "https://github.com/LaunchPad90/FORE-card",
        hosted: ""
    }
]