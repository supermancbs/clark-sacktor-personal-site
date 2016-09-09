import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class Portfolio extends Component{
  render(){
    return(
      <Carousel>
    <Carousel.Item>
      <img width={`100%`} height={`100%`} alt="900x500" src="http://learn-co-students.github.io/deploy-on-day-1-web-0616/img/students/clark_sacktor_profile.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={`100%`} height={`100%`} alt="900x500" src="../images/png/FeedMe.png"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    )
  }
}

export default Portfolio
