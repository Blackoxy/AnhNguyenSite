import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Error from './components/Error';
import Navigation from './components/Navigation';
import './css/App.css';
import'./index.css';


class App extends Component {
  render() {
    return (

      <div className='main'>
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/projects' component={Projects} exact />   
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
