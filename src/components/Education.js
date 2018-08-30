import React from 'react';
import { render } from 'react-dom';

class Education extends React.Component {
  render() {
    return (
      <div className="section" id="educationDiv">
				<div id="eduContent">
					<h2>Education</h2>
					<div className="row educationRow">
						<div className="col col-md-4 logoCol">
							<img className="eduLogo" src="/wp-content/themes/twentyfifteen-child/img/mit.png" alt=""/>
						</div>
						<div className="col col-md-8">
							<a target="_blank" href="http://meche.mit.edu/"><h4>Massachusetts Intstitute of Technology</h4></a>
							<h5>B.S. Mechanical Engineering</h5>
							<p>My time at the Institute was the most influential in my life. MIT brings together an vastly diverse student body to learn and tackle incredibly difficult problems together. My studies in mechanical engineering were highly focused on the product design side of the major, culminating in the construction of Glow (see above).</p>
              <p>Along with my studies I was lucky enough to play four years of varsity baseball, competing in the D3 NCAA tournament three times and raising the schools first conference championship banner my senior year.</p>
						</div>
					</div>
					<div className="row educationRow">
						<div className="col col-md-4 logoCol col-md-push-8">
							<img className="eduLogo" src="/wp-content/themes/twentyfifteen-child/img/utd.png" alt=""/>
						</div>
						<div className="col col-md-8 col-md-pull-4">
							<h4><a target="_blank" href="http://cs.utdallas.edu/" target="_blank">University of Texas at Dallas</a></h4>
							<h5>M.S. Computer Science</h5>
							<p>Combining my experiences in product development from MIT with my time at a technology startup, I came to the realization that the most captivating areas of growth to come in the upcoming decades will be in the land of computing. Along with working as a developer, I am pursuing a Master’s of Science in Computer Science following the Intelligent Systems Track (AI/ML) at UTDallas. I plan to graduate in the Spring of 2020.</p>
						</div>
					</div>
				</div>
			</div>
    )
  }
}

export default Education;
