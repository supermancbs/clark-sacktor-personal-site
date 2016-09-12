import React, { Component } from 'react'
import { Carousel, Image } from 'react-bootstrap'

class Portfolio extends Component{
  render(){
    return(
      <Carousel>
    <Carousel.Item>
      {/* <Iframe src="//giphy.com/embed/3o6Zt9Ly177rmsl09W" width={`100%`} height={`100%`} class="giphy-embed" allowFullScreen/> */}
      <Image width={`100%`} height={`100%`} alt="900x500" src="https://media.giphy.com/media/3o6Ztp9rSI6ikC8I92/giphy-downsized-large.gif"/>
      <Carousel.Caption>
        <div className="bg-primary">
          <div className="lead">
          <h3>Feed Me</h3>
            <p>
                Single page recipe search engine based off of the user’s available ingredients.
                Built a pure JavaScript MVC web application to find recipes based off of imputed ingredients.
                Interacted with a food API via multiple AJAX requests.
                Created a website that displays recipes based off of user’s time preference, and ingredient input.
                Front end used Full Page JS library for slide creation, Handlebars, and Bootstrap.
            </p>
            <p><a className="btn btn-primary" target="_blank" href="https://learn.co/supermancbs/resume"> Github</a></p>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image width={`100%`} height={`100%`} alt="900x500" src="https://media.giphy.com/media/3o7TKSdpgwGRXmGI1y/giphy.gif"/>
      <Carousel.Caption>
        <div className="bg-primary">
          <div className="lead">
          <h3>Babysitter’s Club </h3>
          <p>
             Parent and babysitter social network designed for connecting and booking appointments.
             Constructed a restful Api using Ruby on Rails 5 for interaction with the front end and database persistence.
             Utilized Rails serializer to render JSON based off of custom requests.
             Front end used React.js with reuseable presentational and container component pattern.
             Used redux to manage react data and structure data flow.
          </p>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image width={`100%`} height={`100%`} alt="900x500" src="https://media.giphy.com/media/3o7TKJzGXJEhR2lC9y/giphy.gif"/>
      <Carousel.Caption>
      <div className="bg-primary">
        <div className="lead">
        <h3>Student Teacher Task Manager Application</h3>
        <p>
         Allows teachers and students to manage classes and assignments.
         Created fully functional Ruby on Rails task manager application.
         Implemented custom SQL queries on join tables to create active record objects for data analytics.
         Developed messaging and comment platform for student feedback.
         Front end used HTML 5 and Bootstrap.
        </p>
        </div>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    )
  }
}

export default Portfolio
