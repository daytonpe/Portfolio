import React from 'react';
import { render } from 'react-dom';
import School from './School'

class Education extends React.Component {
  render() {
    return (
      <div className="section" id="educationDiv">
				<div id="eduContent">
					<h2>Education</h2>
          <School
            logo="mit_edu"
            logoPosition="left"
            schoolUrl="http://meche.mit.edu/"
            schoolName="Massachusetts Institute of Technology"
            degree="B.S. Mechanical Engineering"
            blurb="My time at the Institute was the most influential in my life. MIT brings together an vastly diverse student body to learn and tackle incredibly difficult problems together. My studies in mechanical engineering were highly focused on the product design side of the major, culminating in the construction of Glow (see above). Along with my studies I was lucky enough to play four years of varsity baseball, competing in the D3 NCAA tournament three times and raising the schools first conference championship banner my senior year."
          />
          <School
            logo="utd_edu"
            logoPosition="right"
            schoolUrl="http://cs.utdallas.edu/"
            schoolName="University of Texas at Dallas"
            degree="M.S. Computer Science"
            blurb="Combining my experiences in product development from MIT with my time at a technology startup, I came to the realization that the most captivating areas of growth to come in the upcoming decades will be in the land of computing. Along with working as a developer, I am pursuing a Master’s of Science in Computer Science following the Intelligent Systems Track (AI/ML) at UT Dallas. I plan to graduate in the Spring of 2020."
          />
				</div>
			</div>
    )
  }
}

export default Education;
