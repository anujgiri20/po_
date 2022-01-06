import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import "./project.css"
import ScrollTop from '../components/ScrollTop';
import Work from '../components/Work';
import cert from "../images/cert.png"
import { pageAnimation, slider, sliderContainer } from '../utils/animation';
import img1 from "../images/Screenshot3.png"
import img2 from "../images/Screenshot2.png"
import img3 from "../images/Screenshot1.png"
import img4 from "../images/Screenshot4.png"
import img5 from "../images/screen.png"
import game from "../images/game.png"
const MyWork = () => {
  return (
    <>
      <div className='project_section'>
      <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Users App(Full Stack)</h1>
          <div>
            <p className='pro_des'>In user app you can add, delete, update userdata along with login and authentication with jwt token verification.Reactjs used in frontend and Nodejs, expressjs for backend and Mongodb as database.<br /><span style={{cursor: "pointer"}} onClick={()=>window.open("https://unruffled-davinci-ee7339.netlify.app")} className='link_pro_'>Netlify</span>, <span style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/instafrontend")}>Github Frontend</span>, <span style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/Insta_pro_backend")}>Github Backend</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://unruffled-davinci-ee7339.netlify.app")} className='project_imges' src={img5} />
          </div>
          
        </div>
        <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Fitness Website(Full Stack)</h1>
          <div>
            <p className='pro_des'>FitnessLab is a workout tracking tool. Add workouts, create your own customized workout plans or find suitable plan from other users.created with Reactjs for frontend and  Nodejs, Expressjs for backend and Mongodb as database.<br /><span style={{cursor: "pointer"}} onClick={()=>window.open("https://goofy-benz-cc9018.netlify.app")} className='link_pro_'>Netlify</span>, <span  style={{marginTop:"10px",marginBottom:"10px",cursor: "pointer"}} onClick={()=>window.open("https://github.com/anujgiri20/fitnessfrontend")} className='link_pro_'>Frontend github</span>, <span style={{cursor: "pointer"}} onClick={()=>window.open("https://github.com/anujgiri20/Capstone_project")}>Backend github</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://modest-shockley-852a56.netlify.app")}  className='project_imges' src={img1} />
          </div>
          
        </div>
        <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Google Kepper(Full Stack)</h1>
          <div>
            <p className='pro_des'>Google Keeper allows users to record plain-text notes and organize, edit, or share them with others using a suite of collaboration tools.created with Reactjs for frontend and  Nodejs, Expressjs for backend and Mongodb as database.<br /><span   style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://youthful-brahmagupta-b06a96.netlify.app")}>Netlify</span>, <span className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/kepper_fontend")}   style={{cursor: "pointer"}}   >Frontend github</span>, <span  style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/kepper_d")}>Backend github</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://youthful-brahmagupta-b06a96.netlify.app")} className='project_imges' src={img2} />
          </div>
          
        </div>
        <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Game hub(Full Stack)</h1>
          <div>
            <p className='pro_des'>Game hub contain variety of games for eg. tic-tac-toe,Rock Paper Scissors etc.created with Reactjs for frontend and  Nodejs, Expressjs for backend and Mongodb as database.<br /><span  style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://heuristic-morse-2a3102.netlify.app")}>Netlify</span>, <span  style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/gamefrontend")}>Frontend github</span>, <span style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/gamebackend")}>Backend github</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://heuristic-morse-2a3102.netlify.app")} className='project_imges' src={game} />
          </div>
          
        </div>
        <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Pomodoro Clock</h1>
          <div>
            <p className='pro_des'>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.Created with Reactjs.<br /><span  style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://lucid-mcnulty-49dc2f.netlify.app")}>Netlify</span>, <span onClick={()=>window.open("https://github.com/anujgiri20/pomodorofrontend")} className='link_pro_'       style={{cursor: "pointer"}} >Fronend github</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://lucid-mcnulty-49dc2f.netlify.app")} className='project_imges' src={img3} />
          </div>
          
        </div>
        {/* <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>project name</h1>
          
            <p className='pro_des'>I am MERN Stack Developer from India. I enthusiastically follow the evolution of many languages, cloud services, and tools and stay on top of best practices.<br /><span className='link_pro_'>github</span> <span className='link_pro_'>netlify</span></p>

          </div>
          <div className='div_img'>
            <img className='project_imges' src={cert} />
          </div>
          
        </div> */}
        <div className='project'>
          <div className='pro_div'>
            <h1 className='pro_title'>Netflix Clone</h1>
          <div>
            <p className='pro_des'>Netflix clone created with Reactjs for frontend with movies Api<br /><span style={{cursor: "pointer"}} onClick={()=>window.open("https://mystifying-shockley-352398.netlify.app")} className='link_pro_'>Netlify</span>, <span style={{cursor: "pointer"}} className='link_pro_' onClick={()=>window.open("https://github.com/anujgiri20/netflix_project")}>Github frontend</span></p>
            </div>
          </div>
          <div className='div_img'>
            <img onClick={()=>window.open("https://mystifying-shockley-352398.netlify.app")} className='project_imges' src={img4} />
          </div>
          
        </div>

       
      </div>
    </>
  );
};

export default MyWork;
