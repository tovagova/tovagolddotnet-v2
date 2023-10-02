import React from "react";
import "../stylesheet.css";
import Image from "../images/homepage/self-bw.png";

const avatar = {
  src: require('../images/homepage/self-bw.png')
}

function Hero() {
  return (
    <section className="hero">
        <img src={avatar.src}></img>
        <section id="welcome">
            <p>I'm an artist, designer, and coder based in NYC.</p>
        </section>
    </section>
  );
}

export default Hero;