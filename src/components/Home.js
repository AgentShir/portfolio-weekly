import React, { Component } from 'react';

import '../styles/App.css';

class Home extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Study Snacks!</h1>
            <p className="lead">Let me help you feed those brain cells.</p>
              <hr className="my-4" />
            <p>No, really. I am here to help!</p>
        </div>
      </div>
    )
  }
}

export default Home;
