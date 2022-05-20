import React from "react";
import avatar from "../../assets/sticker.png"

function Hero () {


    return (
        <section className="hero">
            <div style={{"width": "80vw", "display": "flex", "flex-wrap": "wrap",
    "align-items": 'center',
    "justify-content": "center"}}>
                <img className="avatar" src={avatar}></img>
                <p className="hero-text">Web and App Developer</p>
            </div>
        </section>
    )
}

export default Hero;