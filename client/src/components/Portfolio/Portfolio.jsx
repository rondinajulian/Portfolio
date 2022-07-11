import React from 'react';
import homebanking from "../material/image/homebanking.PNG"
import ciudadZombie from "../material/image/ciudad-zombie-icon.png"
import pixelArt from "../material/image/pixel-art-icon.png"
import PI from "../material/image/PI.PNG"
import grupal from "../material/image/grupal.PNG"
import animada from "../material/image/Wb-animada.PNG"
import "./Portfolio.css"


function Portfolio() {
    return (
        <div className='portfolio-container'>
            <div id="portfolio">
        <div class="portfolio">
          <h3>Portfolio</h3>
          <div id="port1">
            <h3>Homebanking</h3>
            <a href="https://github.com/rondinajulian/Home-Banking" target="_blank ">
              <img src={homebanking} title="HomeBanking"/>
            </a>
          </div>

          <div id="port2">
          <h3>Ciudad Zombie</h3>
            <a href="https://github.com/rondinajulian/ciudadzombie" target="_blank">
              <img src={ciudadZombie} title="ciudadZombie"/>
            </a>
          </div>

          <div id="port1">
          <h3>Pixel Art</h3>
            <a href="https://github.com/rondinajulian/Pixelart" target="_blank">
              <img src={pixelArt} title="pixelArt"/>
            </a>
          </div>

          <div id="port2">
          <h3>Recetas api</h3>
            <a href="https://github.com/rondinajulian/Pi-Food" target="_blank">
              <img src={PI} title="Recetas API"/>
            </a>
          </div>

          <div id="port1">
          <h3>E-Commerce</h3>
            <a href="https://tfp-art04-client.vercel.app/" target="_blank">
              <img src={grupal} title="E-Commerce"/>
            </a>
          </div>

          <div id="port2">
          <h3>Animacion CSS</h3>
            <a href="https://github.com/rondinajulian/Web-Animada" target="_blank">
              <img src={animada} title="Animacion"/>
            </a>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Portfolio;