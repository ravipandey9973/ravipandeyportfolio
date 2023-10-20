import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import {useContext} from "react";



const Intro = () => {

  

  


const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;



  return (
   
     <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style= {{color:darkMode? 'white': ''}}>Hy! I Am </span>
            <span>Ravi Pandey</span>
            
            <span>
            Welcome to my portfolio! I am a dynamic graduate from Lovely Professional University in Computer Science and Engineering, specialized in Machine Learning and RPA. With a knack for problem-solving and a strong team player, I thrive on refining my coding skills while nurturing a profound interest in Python, C, C++, Java, Web Development, Data Structures & Algorithms, and Oracle SQL. Join me in exploring a journey fueled by curiosity, dedication, and a relentless pursuit of growth.
            </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/ravipandey9973"><img src={Github} alt=""/></a>
          <a href="https://www.linkedin.com/in/ravi--pandey/"><img src={LinkedIn} alt=""/></a>
          <a href="https://www.instagram.com/__ravi_pandey__/"><img src={Instagram} alt=""/></a>
        </div>

        </div>
        <div className="i-right">
           <img src={Vector1} alt=""/>
           <img src={Vector2} alt=""/> 
           <img src={boy} alt=""/> 
           <img 
          
          
           
           
          src={glassesimoji}
          alt=""/>
           <div 
            
           
           style={{top:-'-4%',left:'68%'}}
           className="floating-div"
           >
            <FloatingDiv image={Crown} txt1='Software' txt2='Engineer'/>
            </div> 
            <div style={{top:'18rem',left:'0rem'}}
            className="floating-div"
             >
                <FloatingDiv image={thumbup} txt1='Web' txt2='Developer'/>
            </div> 
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background:'#C1F5FF',
                top: '17rem',
                width: '21rem',
                height:'11rem',
                left:'-11rem'
            }}></div>
        </div>
     </div> 
   
  )
}

export default Intro
