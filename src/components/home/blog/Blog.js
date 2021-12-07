import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'
const Blog = () => {
    return (

        <section class="blogs" id="blogs">

            <h1 class="heading"> our <span>blogs</span> </h1>

            <div class="box-container">

                <div class="box" data-aos="fade-right">
                    <div class="image">
                        <img src="image/1.jpeg" alt="" />
                    </div>
                    <div class="content">
                        <h3>Lorem ipsum dolor sit amet..</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link to="#" class="btn">read more</Link>
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                            <a href="#"> <i class="fas fa-user"></i> by admin </a>
                        </div>
                    </div>
                </div>

                <div class="box" data-aos="fade-down">
                    <div class="image">
                        <img src="image/2.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h3>Lorem ipsum dolor sit amet consectetur..</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link to="#" class="btn">read more</Link>
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                            <a href="#"> <i class="fas fa-user"></i> by admin </a>
                        </div>
                    </div>
                </div>

                <div class="box" data-aos="fade-left">
                    <div class="image">
                        <img src="image/3.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link to="#" class="btn">read more</Link>
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                            <a href="#"> <i class="fas fa-user"></i> by admin </a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/stories" className="btn more">view more</Link>

        </section>

    )
}

export default Blog
