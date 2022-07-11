import React from "react";
import "./Studies.css";
import Unaj from "../material/image/Unaj.jpg";
import acamica from "../material/image/acamica.png";
import henry from "../material/image/Henry.png";

function Studies() {
  return (
    <div className="studies-container">
      <div id="formacion">
        <nav class="formacion">
          <h3>Academic training</h3>
          <div id="form1">
            <img src={acamica} alt="" />
            <h4>ACAMICA</h4>
            <p>
              Graduated from academia, Front-End Developer career, it has a look
              at the bussines world, in which They include me in work teams to
              carry out projects Just like you would in a professional setting.
              The practices are given by projects which are evaluated by
              professionals certified by Mercado Libre and Globant.
            </p>
          </div>
          <div id="form2">
            <img src={Unaj} />
            <h4>UNAJ</h4>
            <p>
              Computer Engineering student, of which he already I am in my 4th
              year, in this university you have a look very professional of the
              career for which a lot of knowledge on Incident Management and
              Bussines work I was already instilled.
            </p>
          </div>
          <div id="form1">
            <img src={henry} alt="" />
            <h4>Soy Henry</h4>
            <p>
              I am henry graduate, intense bootcamp with more than 800 hours of
              programming, in this career I acquired knowledge of both back and
              front-end
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Studies;
