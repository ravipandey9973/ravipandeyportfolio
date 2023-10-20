import React from 'react'
import './Works.css'
import turn from "../../img/turn.png";
import epam from "../../img/epam.png";
import emicon from "../../img/emicon.jpg";
import all from "../../img/all.png";
import highradius from "../../img/highradius.png";
import {themeContext} from '../../Context'
import {useContext} from "react";

const Works = () => {

const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
  <div className="works">
    
    <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>Works for all these</span>
        <span>Brands & Clients</span>
        <span>
        Serving various brands and clients demonstrates   
         <br/>
          your adaptability and expertise in multiple domains.
          <br/>
          if you have any other questions or details you'd like to share contact me
         <br/> 
          
        </span>
        
        <button className="button s-button">Hire Me</button>
       
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="w-right">
            <div className="w-mainCirle">
                <div className="w-secCircle">
                   <img src={turn} alt=""/> 
                </div>
                <div className="w-secCircle">
                   <img src={epam} alt=""/> 
                </div>
                <div className="w-secCircle">
                   <img src={emicon} alt=""/> 
                </div>
                <div className="w-secCircle">
                   <img src={all} alt=""/> 
                </div>
                <div className="w-secCircle">
                   <img src={highradius} alt=""/> 
                </div>

            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
  </div>
  )
}

export default Works
