import React from "react";
import avatar from "../../assets/sticker.png"

function Hero () {


    return (
        <section className="hero">
            <img className="avatar" src={avatar}></img>
            <p className="hero-text">Web and App Developer</p>
        </section>
    )
}

export default Hero;