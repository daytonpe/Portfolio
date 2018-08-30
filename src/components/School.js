import React from 'react';
import { render } from 'react-dom';
import assets from '../helpers/assets.js'

class Experience extends React.Component {
  render() {

    let logoClasses;
    let infoClasses;

    if (this.props.logoPosition === 'right'){
      logoClasses = "col col-md-4 logoCol order-md-2"
      infoClasses = "col col-md-8 order-md-1"
    } else {
      logoClasses = "col col-md-4 logoCol order-md-1"
      infoClasses = "col col-md-8 order-md-2"
    }

    return (
      <div className="row educationRow">
        <div className={logoClasses}>
          <img className="eduLogo" src={assets[this.props.logo]} alt="university logo"/>
        </div>
        <div className={infoClasses}>
          <a target="_blank" href={this.props.schoolUrl}><h4>{this.props.schoolName}</h4></a>
          <h5>{this.props.degree}</h5>
          <p>{this.props.blurb}</p>
        </div>
      </div>
    )
  }
}

export default Experience;
