import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

import './Home.css';
import './App.css';

function Introduction() {
  const [showContacts, setShowContacts] = useState(false);

  const handleContactClick = () => {
    setShowContacts(prevShowContacts => !prevShowContacts);
  };

  return (
    <div className="home">
      <div className="introduction">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
              <p>Hi, I am</p>
              <h1>Swathi Asokraj</h1>
              <p>
                A versatile software developer with expertise in web development, automation, and machine learning.
              </p>
              <h4 className="d-none d-md-block">Let's transform ideas into immersive experiences together.</h4>

              <div className="contact-container">
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #3c3f58",
                    color: "#3c3f58"
                  }}
                  onClick={handleContactClick}
                >
                  Contact Me {showContacts ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
                </Button>

                {showContacts && (
                    <div className="contact-icons mt-3 d-flex justify-content-center justify-content-md-start gap-3 flex-md-nowrap flex-wrap">
                      <a className="contact-link" href="https://github.com/swathiasok">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                      </a>
                      <a className="contact-link" href="https://www.linkedin.com/in/swathi-asok/">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                      </a>
                      <a className="contact-link" href="mailto:swathiasok14@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                      </a>
                    </div>
                  )}
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img src={process.env.PUBLIC_URL + '/images/intro.jpg'} alt="Swathi Asokraj" className="profile-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Introduction;