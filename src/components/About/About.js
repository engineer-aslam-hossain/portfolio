import React from "react";
import "./About.css";
import { ProgressBar } from "react-bootstrap";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 aboutMySelf"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <h3>About Myself</h3>
            <p>
              I'm a Javascript Enthusiast. Love to working in Javascript
              Ecosystem speacially React, Next Js, React Native. I'm a
              technology explorer and learner. I love to learn new technology
              and explore it. Becoming a Full-Stack software engineer is my
              goal. I'm a simply simple person with lots of interests.
            </p>
            <div className="d-flex aboutBtn">
              <div className="totalInfo pt-3 mr-3">
                <a
                  href="https://drive.google.com/uc?export=download&id=17sRDN4hhP0RKmVPJNkCYHaS8kGhlMYoA"
                  target="blank"
                  className="allArticle"
                >
                  resume
                </a>
              </div>
              <div className="totalInfo pt-3">
                <a
                  className="allArticle"
                  href="https://www.fiverr.com/dev_aslam"
                  target="_blank"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 progressBar"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <p>Javascript 85%</p>
            <ProgressBar now={85} />
            <p>React 75%</p>
            <ProgressBar animated now={75} />
            <p>Next Js 80%</p>
            <ProgressBar animated now={80} />
            <p>Express 75%</p>
            <ProgressBar animated now={75} />
            <p>MongoDB 70%</p>
            <ProgressBar animated now={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
