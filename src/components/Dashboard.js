import React from 'react'
import { Link } from 'react-router-dom';
import imagesvg from "../images/Dashboard svg.jpg"
import './Dashboard.css'
import {GoGraph} from 'react-icons/go'
import {FcCompactCamera} from 'react-icons/fc'
import {GiMoneyStack} from 'react-icons/gi'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard_container_left">
          <h1
            style={{ fontFamily: "sans-serif", fontSize: 80, color: "#0a65a4" }}
          >
            Managing money,
          </h1>
          <h1
            style={{ fontFamily: "sans-serif", fontSize: 70, color: "#6fbbd3" }}
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
        <div className="dashboard_container_right">
          <img className="dashboard_image" src={imagesvg} alt="" />
        </div>
      </div>

      <div className="card_container">
        <div className="card">
          <GoGraph className="card_icons"/>
          <h2 className="card_title">Visualization</h2>
          <p className="card_desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className="card">
          <FcCompactCamera className="card_icons"/>
          <h2 className="card_title">OCR</h2>
          <p className="card_desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className="card">
          <GiMoneyStack className="card_icons"/>
          <h2 className="card_title">Track your expenses</h2>
          <p className="card_desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard