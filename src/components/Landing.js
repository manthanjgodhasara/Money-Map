import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import imagesvg from "../images/landing svg3.svg"
import './Landing.css'
import {GoGraph} from 'react-icons/go'
import {FcCompactCamera} from 'react-icons/fc'
import {GiMoneyStack} from 'react-icons/gi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Landing = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, [])
  
  return (
    <>
      <div className="landing_container">
        <div className="landing_container_left" data-aos="fade-right">
          <h1
            style={{ fontFamily: "sans-serif", fontSize: 75, color: "#0a65a4" }}
          >
            Managing money,
          </h1>
          <h1
            style={{ fontFamily: "sans-serif", fontSize: 65, color: "#6fbbd3" }}
          >
            made simple
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quae dolorem dolore ea, voluptatem corrupti ullam et
            facere, sed beatae consequatur.
          </p>
          <Link to="/signup" className="btn-start">
            Get Started
          </Link>
        </div>
        <div className="landing_container_right" data-aos="fade-left">
          <img className="landing_image" src={imagesvg} alt="" />
        </div>
      </div>

      <div className="card_container">
        <div className="card" data-aos="fade-up">
          <GoGraph className="card_icons" />
          <h2 className="card_title">Visualization</h2>
          <p className="card_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="card" data-aos="fade-up">
          <FcCompactCamera className="card_icons" />
          <h2 className="card_title">OCR</h2>
          <p className="card_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="card" data-aos="fade-up">
          <GiMoneyStack className="card_icons" />
          <h2 className="card_title">Track your expenses</h2>
          <p className="card_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing