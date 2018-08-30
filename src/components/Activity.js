import React from 'react';
import { render } from 'react-dom';
import assets from '../helpers/assets.js'

class Activity extends React.Component {
  render() {
    return (
      <div className="col col-md-6 personalCol">
        <img className="personalImg" src={assets[this.props.logo]} alt="activity image"/>
        <div className="overlay">
          <div className="projectInfo">
            <h4>{this.props.activity}</h4>
            <p>{this.props.blurb}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Activity;
