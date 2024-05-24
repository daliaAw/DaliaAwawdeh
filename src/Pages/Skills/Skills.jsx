import React from 'react';
import './Skills.css';

const SkillBar = ({ skill, percentage, icon }) => {
  return (
    <div className="bar-container">
         <div className="skill-info">
        {icon && <i className={icon}></i>}
        <span className="skill-name">{skill}</span>
      </div>
      <div className={`skill-bar ${skill.toLowerCase().replace(/\s/g, '-')}`}>
        <div className="progress" style={{ width: `${percentage}%` }}>
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section-container" id="skills">
        <h5 className='title'>MY SKILLS</h5>
        <h6 className='subtitle'>What I Know</h6>
        <div className="skills-content">
          <div className="col column">
            <SkillBar skill="HTML" percentage={85} icon="fab fa-html5" />
            <SkillBar skill="CSS" percentage={85} icon="fab fa-css3-alt" />
            <SkillBar skill="JavaScript" percentage={75} icon="fab fa-js" />
            <SkillBar skill="jQuery" percentage={65} icon="fab fa-js" />
          </div>
          <div className="col column">
            <SkillBar skill="Bootstrap" percentage={85} icon="fab fa-bootstrap" />
            <SkillBar skill="React" percentage={65} icon="fab fa-react" />
            <SkillBar skill="GitHub" percentage={70} icon="fab fa-github" />
            <SkillBar skill="Node.js" percentage={65} icon="fab fa-node-js" />
          </div>
          <div className="col column">
            <SkillBar skill="Express.js" percentage={60} icon="fas fa-server" />
            <SkillBar skill="Python" percentage={60} icon="fab fa-python" />
            <SkillBar skill="Django" percentage={65} icon="fab fa-python" />
            <SkillBar skill="SQL" percentage={60} icon="fas fa-database" />
          </div>
          <div className="col column">
            <SkillBar skill="MongoDB" percentage={60} icon="fas fa-database" />
            <SkillBar skill="Mongoose" percentage={60} icon="fas fa-database" />
            <SkillBar skill="PostgreSQL" percentage={60} icon="fas fa-database" />
          </div>
        </div>
        <hr className='divider'/>

    </section>
  );
}

export default Skills;
