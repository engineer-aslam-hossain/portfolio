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
              Within 3+ years of experience, I have worked with Enterprise level clients and Startups across multiple domains. I have extensive experience in both front-end and back-end development across the following technical stacks. I have developed multiple solutions for Websites, Mobile applications, Cross-platform mobile applications. I'm skilled on HTML, CSS, Javascript, Bootstrap, Flutter, React, React-Native, NextJs, VueJs,MongoDB, Node.
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
            <p>Flutter 85%</p>
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
