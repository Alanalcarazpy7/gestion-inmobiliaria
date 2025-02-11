import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import photo1 from "../assets/img/property-1.jpg";
import photo2 from "../assets/img/property-2.jpg";
import photo3 from "../assets/img/property-3.jpg";
import photo4 from "../assets/img/property-4.jpg";
import photo5 from "../assets/img/property-5.jpg";
import photo6 from "../assets/img/property-6.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-contacto">
          <h3>¡Contáctanos!</h3>
          <div className="footer-item">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h4>123 Street, New York, USA</h4>
            </div>
            <div className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
              <h4>+012 345 67890</h4>
            </div>
            <div className="footer-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4>mail@domain.com</h4>
            </div>
          </div>
          <div className="footer-socials">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div>
          <h3>Otros Enlaces</h3>
          <div className="footer-enlaces">
            <a href="#home">Inicio</a>
            <a href="#lista-propiedades">Listas de Propiedades</a>
            <a href="#tipo-propiedades">Nuestros Servicios</a>
            <a href="#agente-propiedad">Agentes Inmobiliarios</a>
            <a href="#contacto">Contactanos</a>
          </div>
        </div>
        <div>
          <h3>Photo Gallery</h3>
          <div className="footer-photo">
            <div className="footer-photo-flex">
              <img src={photo1} alt="Image 1" />
              <img src={photo2} alt="Image 1" />
              <img src={photo3} alt="Image 1" />
            </div>
            <div className="footer-photo-flex">
              <img src={photo4} alt="Image 1" />
              <img src={photo5} alt="Image 1" />
              <img src={photo6} alt="Image 1" />
            </div>
          </div>
        </div>
        <div>
          <h3>Boletín Informativo</h3>
          <p>Mantente informado con nuestras novedades.</p>
          <div className="footer-input">
            <input placeholder="Tu Email" type="email" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>
          Desarrollado por <span className="autor">Alan Alcaraz</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
