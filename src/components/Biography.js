import React from 'react';
import { render } from 'react-dom';

class Biography extends React.Component {
  render() {
    return (
      <div class="section" id="bioDiv">
        <div class="row">
          <div class="col col-md-6">
            <img id="mug" src="/wp-content/themes/twentyfifteen-child/img/mug.jpg" alt="profile picture"/>
          </div>
          <div class="col col-md-6">
            <h2>Pat in 30 Seconds</h2>
            <p>Hi, I’m Pat,</p>
            <p>I’m a developer currently living in Dallas, Texas. After studying Mechanical Engineering as an undergrad (MIT ’14) and spending a couple years in energy, I made the switch to software.</p>
            <p>I work with JavaScript, Docker, Kubernetes and other technologies at the startup Parkhub. In the evenings I’m working on my Master’s Degree from UTDallas in Computer Science on an Intelligent Systems (AI) track. I plan to finish my studies by Spring of 2020.</p>
            <p>I live for working on difficult problems and experiencing everything this world has to offer. If I'm not working, I'm likely climbing a peak.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Biography;
