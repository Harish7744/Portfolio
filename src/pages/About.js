import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
            <p>
            Role Overview As a Front-End Developer, I play a key role in designing and implementing front-end solutions that delight our users and contribute to the success of our products. I work closely with cross-functional teams to translate design mockups and requirements into responsive and interactive web applications. Key Responsibilities Develop modular and scalable front-end components using modern JavaScript frameworks such as React. Implement pixel-perfect UI designs with a focus on user experience and accessibility. 
            Collaborate with designers and backend developers to integrate front-end interfaces with backend APIs. Optimize application performance for speed and responsiveness across various devices and browsers. Conduct code reviews and provide constructive feedback to team members to ensure code quality and best practices adherence. Stay updated with the latest front-end technologies and trends.
            </p>
            
        
        </>
      </div>
    </>
  );
};

export default About;
