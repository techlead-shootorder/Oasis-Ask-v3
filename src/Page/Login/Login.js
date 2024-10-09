// import { Link } from "react-router-dom";
import "./login.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
const Login = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
 
  return (
    <div className="Login">
      <img src='/oasis-logo.jpg' alt="" className="orbital" />
      <div className="left">
        <h1>Ask Oasis</h1>
        <h2>Your Fertility Questions Answered by Experts</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <a to="/dashboard">Get Started</a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src='/oasis-logo.jpg' alt="" />
        <div className="links">
          <a to="/">Terms of Service</a>
          <span>|</span>
          <a to="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
 
export default Login;