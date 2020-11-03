import React from 'react';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import './Experience.css';
const Experience = () => {
  const educationHandler = () => {
    document.querySelector('.educationBtn').classList.add('active');
    document.querySelector('.experienceBtn').classList.remove('active');
    document
      .querySelector('.educationDetails')
      .style.setProperty('visibility', 'visible');
    document
      .querySelector('.experienceDetails')
      .style.setProperty('visibility', 'hidden');
  };
  const experienceHandler = () => {
    document.querySelector('.educationBtn').classList.remove('active');
    document.querySelector('.experienceBtn').classList.add('active');
    document
      .querySelector('.educationDetails')
      .style.setProperty('visibility', 'hidden');
    document
      .querySelector('.experienceDetails')
      .style.setProperty('visibility', 'visible');
  };

  const windowWidth = window.innerWidth;
  return (
    <section className='experience'>
      <ParticleCanvas />
      <div className='container'>
        <div className='row d-flex align-items-center flex-column'>
          <div className='toggleButtons'>
            <button
              className='experienceBtn mr-3 active'
              onClick={experienceHandler}>
              My Experience
            </button>
            <button className='educationBtn' onClick={educationHandler}>
              My Education
            </button>
          </div>
          <div className='experienceDetails  row'>
            <div
              className='col py-5 years mr-5 px-0'
              data-aos={windowWidth > 1000 ? 'fade-right' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <p className='text-right mt-4 firstP'>
                July 2020 to December 2020
              </p>
              <p className='text-right mt-4 secondP'>March 2017 to Jun 2017</p>
              <p className='text-right mt-4 thirdP'>
                August 2017 to November 2017
              </p>
            </div>
            <div className='line col'></div>
            <div
              className='experienceInfo col py-5 detailsInfo'
              data-aos={windowWidth > 1000 ? 'fade-left' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <div className='firstExp'>
                <h4>Training</h4>
                <p>
                  Complete Web Development With Jhankar Mahbub <br />
                </p>
              </div>
              <div className='secondExp'>
                <h4>Training</h4>
                <p>LICT Project , ICT-Division-Government-of-Bangladesh.</p>
              </div>
              <div className='thirdExp'>
                <h4>Training</h4>
                <p>
                  Web Development Course <br />
                  RRF Foundation
                </p>
              </div>
            </div>
          </div>
          <div className='educationDetails  row'>
            <div
              className='col py-5 years mr-5 px-0'
              data-aos={windowWidth > 1000 ? 'fade-right' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <p className='text-right mt-4 firstP'>May 2018 to present</p>
              <p className='text-right mt-4 secondP'>March 2013 to 2017</p>
              <p className='text-right mt-4 thirdP'>2008 to 2012/13</p>
            </div>
            <div className='line col'></div>
            <div
              className='experienceInfo col py-5 detailsInfo'
              data-aos={windowWidth > 1000 ? 'fade-left' : 'fade-up'}
              data-aos-duration='900'
              data-aos-delay='400'>
              <div className='firstExp'>
                <h4>Bsc In CSE</h4>
                <p>
                  Daffodil International University <br />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className='secondExp'>
                <h4>Diploma In CT</h4>
                <p>
                  Mymensingh Govt. Polytechnic <br />
                  Mymensingh, Dhaka, Bangladesh
                </p>
              </div>
              <div className='thirdExp'>
                <h4>SSC</h4>
                <p>
                  Barachowna High School <br />
                  Barachowna, Sakhipur, Tangail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
