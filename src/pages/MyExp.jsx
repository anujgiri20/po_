import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../utils/animation';
import 'react-vertical-timeline-component/style.min.css';
import './index1.css';
import { titleAnimation, fade, photoAnimation } from '../utils/animation';
import img from "../images/logo1.png"
import {
  LayoutStyle,
  DescriptionStyle,
  ImageStyle,
  HideStyle,
} from '../utils/styles';

import coding from "../images/co.png"
import graph from "../images/graph.png"
const MyExp = () => {
  return (
    <>


      <div className='education'>
        <h1 className='education_heading'><span className='span_'>01. </span>E D U C A T I O N</h1>
        <hr />
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Bachelor of Engineering (Information Technology)</h1>
          <p className='cl'>KDK college of engineering, Nagpur.</p>
          <p className='cl'>CGPA : 8.65 | 2020 Passout</p>

        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>H.S.C. Maharashtra Board</h1>
          <p className='cl'>Shivaji science college, Gadchiroli.</p>
          <p className='cl'>Percentage : 68%</p>

        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>S.S.C. Maharashtra Board</h1>
          <p className='cl'>Shivaji high school, Gadchiroli.</p>
          <p className='cl'>Percentage : 75%</p>

        </div>

      </div>


      <div className='education'>
        <h1 className='education_heading'><span className='span_'>02. </span>A C H I E V E M E N T S</h1>
        <hr />
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Gate 2020 Qualified</h1>

        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Gate 2021 Qualified</h1>


        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Research paper published in International journal for
            emerging trends in engineering & management.</h1>
        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Hacker rank golden badge in programming</h1>

        </div>
        <div className='div_box'>
          <h1 className="degree_heading"><span> ‣ </span>Hackathon participations</h1>

        </div>
      </div>




      <div className='education_'>
        <h1 className='education_heading certification_heading_'><span className='span_'>03. </span>C E R T I F I C A T I O N S</h1>
        <hr />
      </div>
      <div className='flex_certificate'>

        <div className='each_one'>

          <h1 className='certificate_heading'>Full stack web development (MERN stack)</h1>
          <p className='certificate_p'>Guvi Geek Network. | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1gm5mn62hS7ITDC3EkEsffa7v0vGtgEhn/view?usp=sharing")} style={{ marginLeft: "10px" }} >See certificate</motion.button>
          </a>
        </div>


        <div className='each_one'>
          <h1 className='certificate_heading'>Front end development</h1>
          <p className='certificate_p'>Udemy | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1rQhcpiipiq77B5hsdDBPy3qXfD1EwWYY/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>

        <div className='each_one'>
          <h1 className='certificate_heading'>Algorithms and data structures</h1>
          <p className='certificate_p'>Hackerrank | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1eg6n7kSohvAh25_-kq7o71OsojrDV9Ft/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>



        <div className='each_one'>
          <h1 className='certificate_heading'>SQL</h1>
          <p className='certificate_p'>Simplilearn | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/14ZiVu8iXtEjrZzOGr2AqREto_wRcpPqF/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>


        <div className='each_one'>
          <h1 className='certificate_heading'>SQL (Basic)</h1>
          <p className='certificate_p'>Hackerrank | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/16qy2SVd1aGd2TfbdA0MIdvKjjBts9RoX/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>


        <div className='each_one'>
          <h1 className='certificate_heading'>SQL (intermediate)</h1>
          <p className='certificate_p'>Hackerrank | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1OcmKcdxNh71Q5mdIfWREROlQURFi-7LH/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>



        <div className='each_one'>
          <h1 className='certificate_heading'>JavaScript</h1>
          <p className='certificate_p'>Guvi Geek Network. | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1Git2otgTklkWo1p5fixgQz7OwnEtPksI/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>





        <div className='each_one'>
          <h1 className='certificate_heading'>JavaScript</h1>
          <p className='certificate_p'>Hackerrank | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1X9DMx_lKu4aRi_P2-aZtSJkebqh6SqSb/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>


        <div className='each_one'>
          <h1 className='certificate_heading'>Data Analytics(Basic)</h1>
          <p className='certificate_p'>Simplilearn | 2021</p>
          <a href={"https:jhevd"} target='_blank' rel='noopener noreferrer'>
            <motion.button onClick={() => window.open("https://drive.google.com/file/d/1EUS0tFD8g5VSZX4rz2D4nP9gtNU9E0oQ/view?usp=sharing")} style={{ marginLeft: "10px" }} variants={fade}>See certificate</motion.button>
          </a>
        </div>


      </div>
      <div style={{marginTop:"100px"}} className='education'>
        <h1 className='education_heading'><span className='span_'>04. </span>P R O G R A M M I N G</h1>
        <hr />
        <div className='codingskill'>
          <img onClick={()=>window.open("https://www.guvi.in/anujgiri202068")} className='code1' src={coding} />
          <img onClick={()=>window.open("https://www.guvi.in/anujgiri202068")} className='code1' src={graph} />
        </div>
      </div>
    </>
  );
};

export default MyExp;
