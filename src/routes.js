// Modules
import React from 'react';
import { Route } from 'react-router'

// Primary Component
import App from './App'

// Navbar
import NavBar from './components/container/NavBar'

import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

export default (
  <Route path="/" component={App} >
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />

  </Route>
)
