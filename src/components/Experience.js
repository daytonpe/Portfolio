import React from 'react';
import { render } from 'react-dom';
import assets from '../helpers/assets.js'

class Experience extends React.Component {
  render() {

    const bigLogos = ['glow', 'ol', 'gel', 'parkhub'];
    let logoClasses;
    let infoClasses;
    let imgClasses;

    if (this.props.logoPosition === 'right'){
      logoClasses = "col col-md-6 logoCol order-md-2"
      infoClasses = "col col-md-6 order-md-1"
    } else {
      logoClasses = "col col-md-6 logoCol order-md-1"
      infoClasses = "col col-md-6 order-md-2"
    }

    (bigLogos.includes(this.props.logo)) ? imgClasses = "bigCompanyLogo" : imgClasses = "companyLogo";

    return (
      <div className="row experienceRow">
        <div className={logoClasses}>
          <img alt="company logo" className={imgClasses} src={assets[this.props.logo]}/>
        </div>
        <div className={infoClasses}>
          <a href={this.props.url}><h4>{this.props.name}</h4></a>
          <h5>{this.props.position}</h5>
          <h5>{this.props.dates}</h5>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Experience;
