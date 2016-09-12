import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

class About extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={6}>
              <Thumbnail width="100" height="100" src="http://learn-co-students.github.io/deploy-on-day-1-web-0616/img/students/clark_sacktor_profile.jpg" responsive>
                <h3>Me</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={6}>
                     <p>  Working at a large corporate law firm I naturally decided to try coding.</p>
                     <p>  It didn't take time before I reorganized my whole day around coding activities.</p>
                     <p>  As a recent Flatiron grad I am looking to pursue a career as a Full Stack Developer.</p>
                      <p>  I am consider myself a film buff, comic book fan, and traveling enthusiast.</p>
                      <p>  Please check out my portfolio!</p>
                     <p>
                       <a className="btn btn-primary" href="/portfolio"> Portfolio</a>
                       <a className="btn btn-primary" target="_blank" href="https://learn.co/supermancbs/resume"> Resume</a>
                     </p>
            </Col>


          </Row>
       </Grid>
      </div>
    )
  }
}

export default About
