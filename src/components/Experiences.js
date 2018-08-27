import React from 'react';
import { render } from 'react-dom';
import Experience from './Experience'

class Experiences extends React.Component {
  render() {

    return (
      <div className="row experienceRow">
        <Experience
          logoPosition="right"
          name="Parkhub"
          url="http://parkhub.com/"
          logo="parkhub"
          position="Developer - Pulse Team"
          dates="Since Jan. 2018"
          description="Working on developing our next generation platform inside of Kubernetes using microservices and CQRS methodology. I assist with designing and developing solutions from end to end using technologies like Kubernetes, Helm, Kafka, gRPC, Node.js, React, Docker, Codefresh and more."
        />
        <Experience
          logoPosition="left"
          name="MIT Educational Council"
          url="https://stargate.mit.edu/ectrackweb/home.mit"
          logo="mit"
          position="Educational Counselor"
          dates="Since Aug. 2018"
          description="The job of an Educational Counselor (EC) is twofold. One is to make certain that prospective applicants and school personnel are aware of and understand the kinds of opportunities offered at MIT. This requires knowledge of current programs, financial aid, admissions policies, etc. The second part of the job is informing MIT about the applicants by conducting a personal interview with each applicant and submitting a report."
        />
        <Experience
          logoPosition="right"
          name="UT Dallas Entrepreneurship Club"
          url="https://utdeclub.com/"
          logo="eclub"
          position="Vice President of Operations"
          dates="Aug. 2017 - May 2018"
          description="The Entrepreneurship Club at UT Dallas aims to be the students’ gateway to the entrepreneurial community on campus. As VP of Operations I will manage club events including emerging technology expos, entrepreneurship skills workshops, startup/founder meetups, and more."
        />
        <Experience
          logoPosition="left"
          name="Tech Talent South"
          url="https://www.techtalentsouth.com/"
          logo="tts"
          position="Student"
          dates="Summer 2016"
          description="To boost my development skills, I attended this two-month code immersion course. Gained experience with Ruby on Rails, HTML5, CSS3, JavaScript, using APIs, deployment, and domain modeling."
        />
        <Experience
          logoPosition="right"
          name="Small Town Top College, LLC"
          url="http://smalltowntopcollege.com/"
          logo="sttc"
          position="Founder"
          dates="Since Sep. 2015"
          description="Small town students often never even think to apply to Ivy-caliber universities. STTC aims to educate high-achieving students from small towns on applying to top academic universities. The site and accompanying podcast compiles alumni interviews, application advice, college experiences, and resources preparing students for the college transition."
        />
        <Experience
          logoPosition="left"
          name="Pioneer Natural Resources"
          url="http://www.pxd.com/"
          logo="pioneer"
          position="Engineer I"
          dates="Jul. 2014 - Jun. 2016"
          description="Worked on various projects with drilling operations staff in the Eagle Ford Play in south Texas and Wolfcamp Play in the Permian Basin. Along with engineering projects, I was a member of the MIT recruiting team, travelling to Boston periodically to conduct information sessions and recruiting events. Prior to my employment, I completed two internships with Pioneer, co-developing a new procedure for measuring fluid levels in horizontal wells with high gas content with Dr. Jeff DaCunha."
        />
        <Experience
          logoPosition="right"
          name="MISTI Israel"
          url="http://misti.mit.edu/student-programs/location/israel"
          logo="misti"
          position="Product Design Instructor"
          dates="Jan. 2014"
          description="The MIT International Science & Technology Initiative allows Institute students to work and teach in other countries. My team taught business, leadership, and product design in four high schools in northern Israel. Student project culminated with a pitch event in which they would present their product or service idea and business plan to their classmates."
        />
        <Experience
          logoPosition="left"
          name="Glow"
          url="http://designed.mit.edu/gallery/view-2013-Glow.html"
          logo="glow"
          position="Team Member"
          dates="Fall Semester 2014"
          description="Working in a team of 18 cross-disciplinary engineers, our team created the interactive yoga mat, Glow, for the MIT mechanical engineering senior design class. Class involved brainstorming, concept selection, and prototype construction. Culminated with live presentation to over 2,000 faculty, students, and guests. Glow integrates LEDs and thin-film pressure sensing to allow users to receive feedback on their balance and position during a yoga routine."
        />
        <Experience
          logoPosition="right"
          name="Gordon Engineering Leadership (GEL) Program"
          url="https://gelp.mit.edu/"
          logo="gel"
          position="Student | Section Leader"
          dates="Aug. 2012 - Jun. 2014"
          description="Program aims to develop leadership traits in students planning to work in engineering fields through leadership labs designed to imitate work situations. Assisted with program leadership and lab administration as a section leader in year two."
        />
        <Experience
          logoPosition="left"
          name="Office of Undergraduate Advising & Academic Programming"
          url="http://uaap.mit.edu/first-year-mit/orientation"
          logo="ol"
          position="Orientation Leader | Orientation Leader Captain"
          dates="Aug. 2011 - Sep. 2013"
          description="Led groups of 10 to 20 freshman through Orientation Week. This included coordinating team building activities, giving informative presentations, and running a community service activity at a shelter for the impoverished elderly in Boston. Selected as an Orientation Leader Captain for the class of 2015 orientation. The new position involved assisting with Orientation Week planning and leadership and training and assisting new orientation leaders."
        />
        <Experience
          logoPosition="right"
          name="Parkhub"
          url="http://parkhub.com/"
          logo="upop"
          position="Developer - Pulse Team"
          dates="Aug. 2011 - Aug. 2012"
          description="UPOP is a self-selected, professional development and engineering leadership effectiveness program that prepares MIT sophomores for success in the workplace. Received academic training in engineering modules and personalized coaching in career development over the course of one year."
        />
      </div>
    )
  }
}

export default Experiences;
