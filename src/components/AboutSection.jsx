import React from 'react';
import { motion } from 'framer-motion';
import './about.css';


import { titleAnimation, fade, photoAnimation } from '../utils/animation';
import img from "../images/logo1.png"
import {
  LayoutStyle,
  DescriptionStyle,
  ImageStyle,
  HideStyle,
} from '../utils/styles';

const AboutSection = ({ main }) => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div className='title'>
          <h2 className="himyname">Hi, my name is</h2>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
            <h1>{main.name}</h1>
            </motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fade}>
          I am <span>{main.occupation}</span> from {main.address.country}.{' '}
          {main.description}
        </motion.p>
        <a  target='_blank' rel='noopener noreferrer'>
          <motion.button onClick={()=>window.open("https://drive.google.com/file/d/1Mgbtj5iHjG-n93OFvlL8wJN6E16AjqNt/view?usp=sharing")} variants={fade}>My Resume</motion.button>
        </a>
      </DescriptionStyle>
      <ImageStyle>
        <img
        style={{width:"300px"
        ,
        backgroundolor:"rgb(100, 255, 218,0.3)",


        borderRadius:"1px 50px 1px 50px",margin:"auto"}}
        className="anujimg"
          variants={photoAnimation}
          src={img}
         
        />
      </ImageStyle>
    
    </LayoutStyle>
  );
};

export default AboutSection;
