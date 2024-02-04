import React from 'react';
import "./SparkleButton.css";
import { Link } from "react-router-dom";


const ColoredButton = ({ color, text }) => {
  const buttonClass = `btn btn--${color}`;

  return (
   <>
    <Link to='/register'>
    <button type="button" className={buttonClass}>
      <span className="btn__txt">Getting Started</span>
      {[...Array(4)].map((_, index) => (
        <i key={index} className="btn__bg" aria-hidden="true"></i>
      ))}
    </button><br/>
    </Link>
    <Link to='/login'>
    <button type="button" className={buttonClass}>
      <span className="btn__txt">Login</span>
      {[...Array(4)].map((_, index) => (
        <i key={index} className="btn__bg" aria-hidden="true"></i>
      ))}
    </button>
    </Link></>
  );
};

const AppBtn = () => {
  return (
    <div>
      <ColoredButton color="purple" text="LOGIN" />
      </div>
    
  );
};

export default AppBtn;
