import React, { Component } from 'react';

import '../styles/App.css';

class Weird extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <h1 className="display-5">Weird Snacks</h1>
            <p className="lead">Because the worm in the tequila is meant to be eaten.</p>
          </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://lorempixel.com/200/200/cats" alt="weird snack1" />
                <div className="card-body">
                      <h4 className="card-title">Weird Snack 1</h4>
                    <h6 className="card-subtitle mb-2 text-muted">$18.00</h6>
                  <p className="card-text">Tequila lollipops, eat the worm damnit!</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/200/200/food" alt="weird snack2" />
                  <div className="card-body">
                    <h4 className="card-title">Weird Snack 2</h4>
                  <h6 className="card-subtitle mb-2 text-muted">$12.00</h6>
                <p className="card-text">Chocolate covered shrimp chips. Just eat em!</p>
              </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/200/200/sports" alt="weird snack3" />
                  <div className="card-body">
                    <h4 className="card-title">Weird Snack 3</h4>
                  <h6 className="card-subtitle mb-2 text-muted">$16.00</h6>
                <p className="card-text">Dried cuttlefish. Good luck getting past the smell!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weird;
