import React, { Component } from 'react'
import { Grid, Row, Col, Image, Thumbnail, Button } from 'react-bootstrap'

class About extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={18} md={12}>
              <Thumbnail src="http://learn-co-students.github.io/deploy-on-day-1-web-0616/img/students/clark_sacktor_profile.jpg" alt="242x100">
                     <h3>Me</h3>
                     <p>  Working at a large corporate law firm I naturally decided to try coding.</p>
                     <p>  It didn't take time before I reorganized my whole day around coding activities.</p>
                     <p>  I am consider myself a film buff, comic book fan, and traveling enthusiast.</p>
                     <p>
                       <p><a className="btn btn-primary" href="https://learn.co/supermancbs/resume"> Resume</a></p>
                     </p>
               </Thumbnail>
            </Col>
          </Row>
       </Grid>
      </div>
    )
  }
}

export default About
