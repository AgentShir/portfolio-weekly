import React, { Component } from 'react';

import '../styles/App.css';

class About extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Aboot</h1>
          <p className="lead">It all started when I got the study munchies and felt like a jerk for not sharing my snacks with my classmates.</p>
            <hr className="my-4" />
              <p>When you feed your brain, you feed your heart... or something similarly inspirational.</p>
      </div>
    )
  }
}

export default About;
