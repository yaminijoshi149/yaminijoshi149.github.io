import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';

function Experience() {
  const timelineData = [
    {
      date: "2025 - 2025",
      company: 'Meta Platforms, Inc.',
      position: 'Software Development Engineer Intern',
      imageUrl: 'images/experience/meta.png',
    },
    {
      date: "2024 - 2025",
      company: 'University of Southern California',
      position: 'M.S Computer Science',
      imageUrl: 'images/experience/usc.jpg',
    },
    {
      date: "2022 - 2023",
      company: 'Workato India Pvt Ltd',
      position: 'Software Development Engineer',
      imageUrl: 'images/experience/workato.png',
    },
    {
      date: "2021",
      company: 'Optum Global (UHG)',
      position: 'Software Engineer Intern',
      imageUrl: 'images/experience/optum.png',
    },
    {
      date: "2018 - 2022",
      company: 'SSN College of Engineering',
      position: 'B. Tech Information Technology',
      imageUrl: 'images/experience/ssn.png',
    },
  ];

  return (
    <div className="container py-5">
      <i><h2 className='title'>EXPERIENCES</h2></i>
      <div className="main-timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className={`timeline-content ${window.innerWidth <= 600 ? 'timeline-card' : ''}`}>
              {index % 2 === 1 ? (
                <>
                  <img src={`${process.env.PUBLIC_URL}/${item.imageUrl}`} alt={item.company} className="timeline-img img-left img-fluid" />
                  <div className="timeline-text left-text">
                    <p className='exp-date'>{item.date}</p>
                    <p className='exp-title'>{item.company}</p>
                    <p className="pos">{item.position}</p>
                    <p className='exp-desc'>{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-text right-text">
                    <p className='exp-date'>{item.date}</p>
                    <p className='exp-title'>{item.company}</p>
                    <p className="pos">{item.position}</p>
                    <p className='exp-desc'>{item.description}</p>
                  </div>
                  <img src={`${process.env.PUBLIC_URL}/${item.imageUrl}`} alt={item.company} className="timeline-img img-right img-fluid" />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;