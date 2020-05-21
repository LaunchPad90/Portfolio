import slot from "../images/slot.png"
import food from "../images/food.png"
import badapp from "../images/badapp.png"
import golfImg from "../images/golf.png"

import slotGif from "../images/slotGif.mp4"
import smackTalkGif from "../images/smackTalkGif.mp4"

export default [
    {
        title: "Slot Machine",
        tech1: "HTML",
        tech2: "CSS",
        tech3: "Javascript",
        content: "Simple browser game. This was my first attempt at writing javascript logic for a game.",
        image: `${slot}`,
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
        content: "Do you love cooking? Do you hate viewing recipes on blog sites? This is the app for you. Enough talking, lets cook.",
        image: `${food}`,
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
        content: "A website designed for developers to post ideas and rate other app ideas. Guaranteed to help with your creativity.",
        image: `${badapp}`,
        gif: ``,
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
        content: "Easy to use scorecard app, designed with a mobile first approach. This app wont help with your game, but it will help you see how bad you are...FORE!",
        image: `${golfImg}`,
        gif: "",
        color1: "rgba(85, 197, 122, 0.4)",
        color2: "rgba(21, 157, 62, 0.8)",
        gitHub: "https://github.com/LaunchPad90/FORE-card",
        hosted: ""
    }
]