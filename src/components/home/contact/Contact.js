import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (

        <section class="contact" id="contact">

            <h1 class="heading"> <span>contact</span> us </h1>

            <div class="row">


                <form action="">
                    <h3 data-aos="zoom-in">tell us something!</h3>
                    <input data-aos="zoom-in" type="text" placeholder="your name" class="box" />
                    <input data-aos="zoom-in" type="email" placeholder="your email" class="box" />
                    <input data-aos="zoom-in" type="number" placeholder="your number" class="box" />
                    <textarea data-aos="zoom-in" placeholder="your message" class="box" cols="30" rows="10"></textarea>
                    <input data-aos="zoom-in" type="submit" value="send message" class="btn" />
                </form>

            </div>

        </section>
    )
}

export default Contact
