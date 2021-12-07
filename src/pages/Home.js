import React from 'react'
import About from '../components/home/about/About'
import Contact from '../components/home/contact/Contact'
import Hero from '../components/home/hero/Hero'
import Blog from '../components/home/blog/Blog'
import Services from '../components/home/services/Services'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Contact />
            <Blog />
        </div>
    )
}

export default Home
