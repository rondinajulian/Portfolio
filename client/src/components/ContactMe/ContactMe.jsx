import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mail from "../material/image/Mail.png";
import Typical from "react-typical";
import axios from "axios";
import "./ContactMe.css";

function ContactMe(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMassage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMassage(e.target.value);
  };

  const submitFomr = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        setBool(false);
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <div className="central-form">
        <div className="col">
          <h2>
            <Typical loop={Infinity} steps={["Get in Touch 📧", 2000]} />
          </h2>
          <a href="https://www.linkedin.com/in/julian-rondina/" target="_blank">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/rondinajulian" target="_blank">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://twitter.com/JulyRondinaoki" target="_blank">
            <i className="fa fa-twitter-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4> Send Your Email Here!</h4>
            <img src={Mail} alt="image not found" />
          </div>
          <form onSubmit={submitFomr}>
            {bool ? (
              <b className="load">
                <progress class="progress w-56"></progress>
              </b>
            ) : (
              ""
            )}
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="sned-btn">
              <button type="submit" class="btn btn-outline">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
