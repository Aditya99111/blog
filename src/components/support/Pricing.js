import React from 'react'
import "./Pricing.css"
const Pricing = () => {
    return (
      <div className="support">
<h1 class="heading"> Support <span>my work</span> </h1>
        <div class="wrapper">
        <div class="item item_1">
          <h3>Starter</h3>
          <img src="https://i.imgur.com/OtJ3Uaw.png" alt="cycle_image"/>
          <div class="info">
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div class="price">
             <h3><sup>$</sup>5<sub>/month</sub></h3>
          </div>
          <div class="btn">
              <a href="#">check out</a>
          </div>
      </div>
        <div class="item item_2">
          <h3>Premium</h3>
          <img src="https://i.imgur.com/U0TRjs5.png" alt="bike_image"/>
          <div class="info">
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div class="price">
             <h3><sup>$</sup>10<sub>/month</sub></h3>
          </div>
          <div class="btn">
              <a href="#">check out</a>
          </div>
      </div>
        <div class="item item_3">
          <h3>Ultimate</h3>
          <img src="https://i.imgur.com/8eO9O9M.png" alt="bike_image"/>
          <div class="info">
          <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div class="price">
            <h3><sup>$</sup>15<sub>/month</sub></h3>
          </div>
          <div class="btn">
              <a href="#">check out</a>
          </div>
      </div>
    </div>
    </div>
    )
}

export default Pricing
