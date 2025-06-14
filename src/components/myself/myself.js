import React from "react";
import {illustration, skillsSection} from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import blueDev from "../../assets/lottie/blueDev.json";
import astro from "../../assets/lottie/astro.json";
import './myself.css'
const Myself = () => {
  return (
    <div className="myself">
        <div className="skills-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={astro} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            ></img>
          )}
          <img
            className="contact-image"
            style={{
               border : "4px solid gray", // add a border to the image           // adjust as needed
               height: "200px",
               objectFit: "cover",       // crop to fill the circle
               borderRadius: "20% 10%",      // make it round
               display: "block", 
               filter: "brightness(70%)",  
               transition: "filter 0.3s ease",      // for margin auto to work
               margin: "0 auto"  ,        // center horizontally
               animation: "floatUpDown 2s ease-in-out infinite"
            }}
            onMouseEnter={e => e.currentTarget.style.filter = "brightness(100%)"}
            onMouseLeave={e => e.currentTarget.style.filter = "brightness(70%)"}
            alt="Man working"
            src={require("../../assets/images/me.jpg")}
        ></img>
        </div>
    </div>
  );
}

export default Myself;