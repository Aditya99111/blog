import React from 'react'
import "./About.css"
const About = () => {
    return (

        <section class="about" id="about">

            <div class="image">
                <img src="image/about-img.svg" alt="" />
            </div>

            <div class="content">
                <h3>about <span class="line-down">us?</span></h3>
                <p> As an aspiring writer seeking to enter the animation industry I seek to weave stories and tales that I can be proud of showing to the world. Get lost in the worlds created in my own head quite often. Come by and hear a tale; maybe you might stick around for another in the near future</p>
                <a href="/about.html" class="btn">read more</a>
            </div>

        </section>
    )
}

export default About
