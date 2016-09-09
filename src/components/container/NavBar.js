
import React, { Component } from 'react'
import {Link} from 'react-router'
// import { connect } from 'react-redux'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends Component{
  render(){
    return(
      <div>
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            Clark
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="pills">
        <LinkContainer to={'/portfolio'}>
          <NavItem eventKey={1}>Portfolio</NavItem>
        </LinkContainer>
        <LinkContainer to={'about'}>
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <LinkContainer to={'contact'}>
          <NavItem eventKey={3}>Contact</NavItem>
        </LinkContainer>
        </Nav>
      </Navbar>
      </div>
    )
  }
}


export default NavBar
