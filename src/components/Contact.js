import React from 'react';
import { render } from 'react-dom';
import Experience from './Experience'

class Contact extends React.Component {
  render() {
    return (
      <div class="section" id="contactDiv">
        <h2>Contact</h2>
        <div class="row">
          <div class="col col-md-4 contactCol">
            <h4>I live in Dallas, Texas.</h4>
          </div>
          <div class="col col-md-4 contactCol">
            <h4>Feel free to reach out.</h4>
          </div>
          <div class="col col-md-4 contactCol">
            <h4>Let's chat over <a target="_blank" href="https://www.houndstoothcoffee.com/">coffee</a>.</h4>
          </div>
        </div>

        <div id="contactIconDiv">
          <a class="contactAnchor" target="_blank" href="mailto:pat@smalltowntopcollege.com">
            <i class="fa fa-envelope fa-5x contactIcon" aria-hidden="true"></i>
          </a>
          <a class="contactAnchor" target="_blank" href="https://www.linkedin.com/in/pat-dayton-0514413a/">
            <i class="fa fa-linkedin-square fa-5x contactIcon" aria-hidden="true"></i>
          </a>
          <a class="contactAnchor" target="_blank" href="https://github.com/daytonpe">
            <i class="fa fa-github-square fa-5x contactIcon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Contact;
