import React from 'react';
import { render } from 'react-dom';
import Experience from './Experience'

// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add( faEnvelope)


class Contact extends React.Component {
  render() {
    return (
      <div className="section" id="contactDiv">
        <h2>Contact</h2>
        <div className="row">
          <div className="col col-md-4 contactCol">
            <h4>I live in Dallas, Texas.</h4>
          </div>
          <div className="col col-md-4 contactCol">
            <h4>Feel free to reach out.</h4>
          </div>
          <div className="col col-md-4 contactCol">
            <h4>Let's chat over <a target="_blank" href="https://www.houndstoothcoffee.com/">coffee</a>.</h4>
          </div>
        </div>

        <div id="contactIconDiv">
          <a className="contactAnchor" target="_blank" href="mailto:pat@smalltowntopcollege.com">
            <i className="fa fa-envelope fa-5x contactIcon" aria-hidden="true"></i>
          </a>
          <a className="contactAnchor" target="_blank" href="https://www.linkedin.com/in/pat-dayton-0514413a/">
            <i className="fa fa-linkedin-square fa-5x contactIcon" aria-hidden="true"></i>
          </a>
          <a className="contactAnchor" target="_blank" href="https://github.com/daytonpe">
            <i className="fa fa-github-square fa-5x contactIcon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Contact;
