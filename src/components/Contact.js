import React, { Component } from 'react';

import '../styles/App.css';

class Contact extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Contact</h1>
        </div>
          <hr className="my-4" />
            <p>Because you really want to complain.</p>
              <p>(808)422-2222</p>
      </div>
    )
  }
}

export default Contact;
