import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../styles/App.css';
import Home from '../components/Home';
import Savory from '../components/Savory';
import Weird from '../components/Weird';
import Sweet from '../components/Sweet';
import Contact from '../components/Contact';
import About from '../components/About';
import BaseLayout from '../components/BaseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/savory" component={Savory} />
            <Route path="/weird" component={Weird} />
            <Route path="/sweet" component={Sweet} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
