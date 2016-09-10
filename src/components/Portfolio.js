import React, { Component } from 'react'
import { Carousel, Image, Iframe } from 'react-bootstrap'

class Portfolio extends Component{
  render(){
    return(
      <Carousel>
    <Carousel.Item>
      {/* <Iframe src="//giphy.com/embed/3o6Zt9Ly177rmsl09W" width={`100%`} height={`100%`} class="giphy-embed" allowFullScreen/> */}
      <Image width={`100%`} height={`100%`} alt="900x500" src="https://media.giphy.com/media/3o6Ztp9rSI6ikC8I92/giphy-downsized-large.gif"/>
      <Carousel.Caption>
      <div className="carousel-text">
        <h3>Feed Me</h3>
        <p>
            Single page recipe search engine based off of the user’s available ingredients.
            Built a pure JavaScript MVC web application to find recipes based off of imputed ingredients.
            Interacted with a food API via multiple AJAX requests.
            Created a website that displays recipes based off of user’s time preference, and ingredient input.
            Front end used Full Page JS library for slide creation, Handlebars, and Bootstrap.
        </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image width={`100%`} height={`100%`} alt="900x500" src="https://media.giphy.com/media/3o7TKSdpgwGRXmGI1y/giphy.gif"/>
      <Carousel.Caption>
      <div className="carousel-text">
        <h3>Babysitter’s Club </h3>
        <p>
           Parent and babysitter social network designed for connecting and booking appointments.
           Constructed a restful Api using Ruby on Rails 5 for interaction with the front end and database persistence.
           Utilized Rails serializer to render JSON based off of custom requests.
           Front end used React.js with reuseable presentational and container component pattern.
           Used redux to manage react data and structure data flow.
        </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
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
