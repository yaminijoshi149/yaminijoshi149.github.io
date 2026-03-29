import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = {
    languages: [
      { name: 'Python', imageUrl: 'images/skills/python.webp' },
      { name: 'C/C++', imageUrl: 'images/skills/cpp.png' },
      { name: 'Java', imageUrl: 'images/skills/java.jpg' },
      { name: 'Ruby', imageUrl: 'images/skills/ruby.png' },
      { name: 'JavaScript', imageUrl: 'images/skills/js.png' },
      { name: 'TypeScript', imageUrl: 'images/skills/ts.png' },
      { name: 'SQL', imageUrl: 'images/skills/sql.png' }
    ],
    databases: [
      { name: 'MySQL', imageUrl: 'images/skills/mysql.png' },
      { name: 'SQLite', imageUrl: 'images/skills/sqlite.jpeg' },
      { name: 'MongoDB', imageUrl: 'images/skills/mongodb.jpg' },
      { name: 'Firebase', imageUrl: 'images/skills/firebase.png' },
      { name: 'PostgreSQL', imageUrl: 'images/skills/postgres.png' }
    ],
    webDevelopment: [
      { name: 'HTML', imageUrl: 'images/skills/htm.webp' },
      { name: 'CSS', imageUrl: 'images/skills/css.png' },
      { name: 'Bootstrap', imageUrl: 'images/skills/boostrap.png' },
      { name: 'Django', imageUrl: 'images/skills/django.svg' },
      { name: 'Flask', imageUrl: 'images/skills/flask.png' },
      { name: 'AngularJS', imageUrl: 'images/skills/angular.png' },
      { name: 'ReactJS', imageUrl: 'images/skills/react.png' },
      { name: 'Ruby on Rails', imageUrl: 'images/skills/rails.png' },
      { name: 'Node.js', imageUrl: 'images/skills/nodejs.jpg' },
      { name: 'Flutter', imageUrl: 'images/skills/flutter.svg' },
      { name: 'SwiftUI', imageUrl: 'images/skills/swiftui.png' }
    ],
    cloud: [
      { name: 'AWS', imageUrl: 'images/skills/aws.png' },
      { name: 'GCP', imageUrl: 'images/skills/gcp.png' },
      { name: 'Docker', imageUrl: 'images/skills/docker.png' },
      { name: 'Kafka', imageUrl: 'images/skills/kafka.webp' },
      { name: 'Kubernetes', imageUrl: 'images/skills/kube.png' }
    ],
    tools: [
      { name: 'Android Studio', imageUrl: 'images/skills/android_studio.png' },
      { name: 'XCode', imageUrl: 'images/skills/xcode.png' },
      { name: 'Git', imageUrl: 'images/skills/git.png' },
    ]
  };

  return (
    <div className="skills-container">
      <i><h2>SKILLS</h2></i>
      <div className="skills-grid">
        <div className="skills-column">
          <div className="skills-category">
            <h4>Languages</h4>
            <div className="skills-list">
              {skillsData.languages.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={`${process.env.PUBLIC_URL}/${skill.imageUrl}`} alt={skill.name} className="skill-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h4>Databases</h4>
            <div className="skills-list">
              {skillsData.databases.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={`${process.env.PUBLIC_URL}/${skill.imageUrl}`} alt={skill.name} className="skill-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h4>Cloud</h4>
            <div className="skills-list">
              {skillsData.cloud.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={`${process.env.PUBLIC_URL}/${skill.imageUrl}`} alt={skill.name} className="skill-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-category">
            <h4>Web/App Development</h4>
            <div className="skills-list">
              {skillsData.webDevelopment.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={`${process.env.PUBLIC_URL}/${skill.imageUrl}`} alt={skill.name} className="skill-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h4>Developer Tools</h4>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={`${process.env.PUBLIC_URL}/${skill.imageUrl}`} alt={skill.name} className="skill-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;