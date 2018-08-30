import React from 'react';
import { render } from 'react-dom';
import Activity from './Activity';
import assets from '../helpers/assets.js'

class Adventure extends React.Component {
  render() {
    return (
      <div className="section" id="personalDiv">
				<h2>Adventure</h2>
				<div className="row personalRow">
          <Activity
            activity="Mountains"
            logo="mountain"
            blurb="Since climbing California's Mt. Whitney after college, I've been questing to stand on the highpoint of every state. As of today (8.31.18), I've completed 37. Summit of Mt. Hood (and shadow on cloud layer) pictured."
          />
          <Activity
            activity="Running"
            logo="marathon"
            blurb="Along with a few other goals in the sport, I hope to run all World Major Marathons. Two down so far (Chicago and New York). PR: 4:10:33. I also recently completed my first ultramarathon (50k) in Grand Junction, CO in April."
          />
				</div>
				<div className="row personalRow">
          <Activity
            activity="Food"
            logo="food"
            blurb="Preparing beautiful meals for my family and friends is a passion. I've also been known to enjoy a craft beer with said meals."
          />
          <Activity
            activity="Travel"
            logo="cliffs"
            blurb="Few experiences are as formative as seeing the world. Growing up with parents in the airline industry lent itself to this passion. I've since traveled to 25+ countries and the list continues to grow."
          />
				</div>
			</div>

    )
  }
}

export default Adventure;
