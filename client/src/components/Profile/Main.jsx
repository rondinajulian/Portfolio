import React from "react";
import "./Main.css";
import Typical from "react-typical";

function Main() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/julian-rondina/"  target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/rondinajulian"  target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://twitter.com/JulyRondinaoki" target="_blank">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello, Im{" "}
                <span className="highlighted-text">Julian Rondina</span>
              </span>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack 🚀",
                    2000,
                    " ",
                    1050,
                    "React/Redux dev 💻",
                    1000,
                    " ",
                    1050,
                    "Node.js dev 💥",
                    1000,
                    " ",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                application developer with front and back end skills.
              </span>
            </span>
          </div>
          <div className="prodile-options">
            <button class="btn bg-white hover:bg-grey-100 text-gray-800 font-semibold m-2 p-2 py-2 px-4 border border-gray-400 rounded shadow">
              Hire me
            </button>
            <div class="dropdown">
              <label
                tabindex="0"
                class="btn bg-white hover:bg-grey-100 text-gray-800 font-semibold m-2 p-2 py-2 px-4 border border-gray-400 rounded shadow"
              >
              Get Resume
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow rounded-box w-52 bg-white hover:bg-grey-100 text-gray-800 font-semibold m-2 py-2 px-4 border border-gray-400 "
              >
                <li>
                  <a
                    href="CV-JulianRondina SF.pdf"
                    download="Rondina Julian.pdf"
                  >
                    Spanish
                  </a>
                </li>
                <li>
                  <a
                    href="CV- JULIAN RONDINA - ENGLISH.pdf"
                    download="Rondina Julian.pdf"
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
