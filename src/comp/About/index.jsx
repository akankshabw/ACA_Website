
import React from 'react';
import "./styles.css";
import background1 from "../../assets/KD.jpeg";

function About() {
  return (
    <section className="about-container "  >
      <div className="header1">
        <h1 >About Us</h1>
      </div>
      <div className ="Details"> 
      <p>Association for Computing Activities (ACA) is the Computer Science society of IIT Kanpur. It organizes departmental activities right from freshers’ to farewell in addition to several programming competitions and lectures.</p>
      </div>
      <div className="Aim">
        <h1> Our Aim</h1>
        <ul>
            <li>To spread knowledge about Computer Science and technology.</li>
            <li>To encourage students to get involved in extra-curricular engineering projects.</li>
            <li>To provide computing resources and guidance to students.</li>
            <li>To promote student-student and student-teacher interaction.</li>
        </ul>
      </div>
      
    </section>
  )
}

export default About;