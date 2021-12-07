import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (

            <section class="home" id="home">

                <div class="content">
                    <h3>Gather 'round </h3>
                    <p>Come; sit by the fire and listen to a tale I've spun for you, traveler.</p>
                    <Link to="/stories" class="btn">get started</Link>
                </div>


            </section>

    )
}

export default Hero
