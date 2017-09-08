import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../styles/App.css';
import Home from '../components/Home';
import CampingNeeds from '../components/CampingNeeds';
import HikingGear from '../components/HikingGear';
import FishingTackle from '../components/FishingTackle';
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
            <Route path="/campingneeds" component={CampingNeeds} />
            <Route path="/hikinggear" component={HikingGear} />
            <Route path="/fishingtackle" component={FishingTackle} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
