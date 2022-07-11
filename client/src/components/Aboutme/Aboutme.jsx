import React from "react";
import "./Aboutme.css"

function Aboutme() {
  return (
    <div className="footer-about">
      <div id="presentacion">
        <nav class="presentacion">
          <div class="descripcion">
            <h2>About me</h2>
            <p>
              Hi, thanks for visiting my website.
              <br />
              <br />
              My name is Julian Rondina, I am a Computer Engineering student
              currently in my 4th year,
              <br />
              I am a graduate of Soy Henry, an intensive bootcamp with more than
              800 hours of training. In this career I intruded on Front and
              Back-end technologies
              <br />
              Many of the functions that you will see reflected on this website
              were taught in this race and I continue day by day incorporating
              even more knowledge.
              <br />
              I am currently working as Supervisor of the area of Technical
              support in the company Pampa Energia S.A, for which I have a lot
              of incident management, case resolution and teamwork.
              <br />
              <br />
            </p>

            <table class="tabla">
              <tr>
                <th>EGE: 26</th>
                <th>COUNTRY: ARGENTINA</th>
              </tr>
              <tr>
                <th>FREELANCE: AVAILABLE</th>
                <th>ADDRESS: BUENOS AIRES</th>
              </tr>
            </table>
            <div class="tab">
              <ul>
                <li>EDAD: 23</li>
                <li>FREELANCE: DISPONIBLE</li>
                <li>RESIDENCIA: ARGENTINA</li>
                <li>ADDRESS: BUENOS AIRES</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Aboutme;
