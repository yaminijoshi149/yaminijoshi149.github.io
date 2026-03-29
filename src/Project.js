import React, {useState} from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css';

function Projects() {
  const projectsData = {
    dlAndCv: [
      {
        title: "TrendTok",
        description: "Python, Llama, MusicGen",
        imageUrl: "images/project/trendtok.png",
        link: "https://github.com/swathiasok/TikTok-Trend-Fusion",
        info: "TrendTok uses generative AI to inspire TikTok creators with new video and trend ideas, AI music, and visual templates based on trending content, enhancing creativity and engagement."
      },
      {
        title: "Partial Face Recognition",
        description: "Python, Keras, Tensorflow",
        imageUrl: "images/project/face_recog.webp",
        link: "https://github.com/swathiasok/PartialFaceRecognition",
        info: "This project focuses on implementing FaceNet, a state-of-the-art facial recognition model, to accurately recognize individuals from partial facial features."
      },
      {
        title: "Object Detection using SSD",
        description: "Python, PyTorch, Numpy, SSD",
        imageUrl: "images/project/object_detect.webp",
        link: "https://github.com/swathiasok/MaskDetection",
        info: "This project implements SSD for real-time object detection, including predicting bounding boxes and class labels to identify and classify multiple objects in images and videos efficiently."
      },
      {
        title: "Computer vision based Smart Selfie",
        description: "Python, OpenCV",
        imageUrl: "images/project/face_detect.webp",
        link: "https://github.com/swathiasok/Smile-Detection-based-selfie-capture",
        info: "This project implements real-time face detection using OpenCV and Haar Cascades, capturing images upon detecting smiles in video and detecting faces in static images."
      },
    ],
    webDevelopment: [
      {
        title: "Code Playground",
        description: "React, NodeJS",
        imageUrl: "images/project/code.png",
        link: "https://github.com/swathiasok/CodePlayground",
        info: "(Ongoing) A collaborative code playground where multiple users can write, edit, and test code in real-time. Built using React and Socket.io for live syncing, it enables seamless peer programming and code sharing."
      },
      {
        title: "Blogging Site",
        description: "EJS, NodeJS, Express, MongoDB",
        imageUrl: "images/project/blog_site.gif",
        link: "https://github.com/swathiasok/BlogSite",
        info: "This project involves creating a BlogSite where users can share their thoughts and posts, view other people's blog posts, using EJS, NodeJS, and MongoDB, and deployed on Heroku."
      },
      {
        title: "Stocks App",
        description: "AngularJS, NodeJS, Express, MongoDB",
        imageUrl: "images/project/stocks_app.avif",
        link: "https://github.com/swathiasok/WebProjects",
        info: "This project entails the creation of a web and iOS mobile application, where users can access detailed stock information, execute stock trades, and perform a range of functionalities."
      },
    ],
    other: [
      {
        title: "DoppelDash - Doppelgänger Game",
        description: "Unity, C#",
        imageUrl: "images/project/doppeldash.png",
        link: "https://github.com/swathiasok/DoppelDash",
        info: "A gravity-flipping 2D puzzle platformer where players control both a main character and a doppelgänger. The game challenges players to solve levels by coordinating between the two entities, navigating obstacles, and timed jumps."
      },
      {
        title: "Automatic Traffic Control System",
        description: "Arduino",
        imageUrl: "images/project/traffic.jpeg",
        link: "https://github.com/swathiasok/Arduino",
        info: "This project involves developing a traffic light control system using Arduino and wireless communication, with LEDs simulating the traffic lights, and transmitter and receiver modules to manage the lights wirelessly."
      },
    ]
  };

  return (
    <Container className="projects">
      <i><h2 className='project-title'>PROJECTS</h2></i>
      <ProjectSection title="Artificial Intelligence" projects={projectsData.dlAndCv} />
      <ProjectSection title="Web Development" projects={projectsData.webDevelopment} />
      <ProjectSection title="Other" projects={projectsData.other} />
    </Container>
  );
}

function ProjectSection({ title, projects }) {
  return (
    <Row className="section">
      <Col xs={12} md={2}>
        <h2 className="section-title">{title}</h2>
      </Col>
      <Col xs={12} md={10}>
        <Row xs={1} md={2} lg={4} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
      <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/${project.imageUrl}`}
                alt={project.title}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Link href={project.link} target="_blank" alt="github link" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Card.Link>
                <Card.Text style={{ textAlign: 'center' }}>
                  <i>{project.description}</i>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="flip-card-back">
            <Card>
              <Card.Body>
                <hr></hr>
                <Card.Text>
                  <i>{project.info}</i>
                </Card.Text>
                <hr></hr>
                <Card.Link href={project.link} target="_blank" alt="github link" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Projects;
