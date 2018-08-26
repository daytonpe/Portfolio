import React from 'react';
import { render } from 'react-dom';

class Hero extends React.Component {
  render() {
    return (
      <div class="section" id="personalDiv">
				<h2>Adventure</h2>
				<div class="row personalRow">

					<div class="col col-md-6 personalCol">
						<img class="personalImg" src="/wp-content/themes/twentyfifteen-child/img/rainier3.jpg" alt=""/>
						<div class="overlay">
					    <div class="projectInfo">
								<h4>Climbing Mountains</h4>
								<p>Since climbing California's Mt. Whitney after college, I've been questing to stand on the highpoint of every state. As of today (8.31.18), I've completed 37. My first attempt of Mt. Rainier is pictured.</p>
					    </div>
					  </div>
					</div>
					<div class="col col-md-6 personalCol">
						<img class="personalImg" src="/wp-content/themes/twentyfifteen-child/img/marathon.jpg" alt=""/>
						<div class="overlay">
					    <div class="projectInfo">
								<h4>Running</h4>
								<p>Along with a few other goals in the sport, I hope to run all World Majors. Two down so far (Chicago and New York). PR: 4:10:33. I also recently completed my first ultramarathon (50k) in Grand Junction, CO in April.</p>
					    </div>
					  </div>
					</div>
				</div>
				<div class="row personalRow">
					<div class="col col-md-6 personalCol">
						<img class="personalImg" src="/wp-content/themes/twentyfifteen-child/img/food.jpg" alt=""/>
						<div class="overlay">
					    <div class="projectInfo">
								<h4>Food &amp; Drink</h4>
								<p>To me food is an art rather than a science. Preparing beautiful meals for my family and friends is a passion. I've also been known to enjoy a craft beer with said meals.</p>
					    </div>
					  </div>
					</div>
					<div class="col col-md-6 personalCol">
						<img class="personalImg" src="/wp-content/themes/twentyfifteen-child/img/cliffs.jpg" alt=""/>
						<div class="overlay">
					    <div class="projectInfo">
								<h4>Travel</h4>
								<p>Few experiences are as formative as seeing the world. Growing up with parents in the airline industry lent itself to this passion. I've since traveled to 25+ countries and the list continues to grow.</p>
					    </div>
					  </div>
					</div>
				</div>
			</div>

    )
  }
}

export default Hero;
