import React, { Component } from 'react';

import '../styles/App.css';

class Savory extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-5">Savory Snacks</h1>
            <p className="lead">The total opposite of sweet.</p>
        </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://lorempixel.com/200/200/cats" alt="savory snack1" />
                <div className="card-body">
                      <h4 className="card-title">Savory Snack 1</h4>
                    <h6 className="card-subtitle mb-2 text-muted">$18.00</h6>
                  <p className="card-text">Chocolate covered arare. Tread carefully.</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/200/200/food" alt="savory snack2" />
                  <div className="card-body">
                    <h4 className="card-title">Savory Snack 2</h4>
                  <h6 className="card-subtitle mb-2 text-muted">$3.69</h6>
                <p className="card-text">Chips. The ones cooked in avocado oil.</p>
              </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/200/200/sports" alt="savory snack3" />
                  <div className="card-body">
                    <h4 className="card-title">Savory Snack 3</h4>
                  <h6 className="card-subtitle mb-2 text-muted">$4.00</h6>
                <p className="card-text">Iso peanuts. I'm not nuts, you're nuts.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Savory;
