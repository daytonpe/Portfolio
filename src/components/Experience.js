import React from 'react';
import { render } from 'react-dom';

class Experience extends React.Component {
  render() {

    let logoClasses;
    let infoClasses;

    if (this.props.logoPosition === 'right'){
      logoClasses = "col col-md-6 logoCol order-md-2"
      infoClasses = "col col-md-6 order-md-1"
    } else {
      logoClasses = "col col-md-6 logoCol order-md-1"
      infoClasses = "col col-md-6 order-md-2"
    }

    return (
      <div className="row experienceRow">
        <div className={logoClasses}>
          <img alt="company logo" className="companyLogo" src={this.props.logo}/>
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
