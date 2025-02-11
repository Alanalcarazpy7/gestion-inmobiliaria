import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./cardAgent.css";


const CardAgent = ({ agent }) => {
  const { img, nombre, posicion } = agent;
  return (
    <div className="card-agent">
      <div className="card-image">
        <img src={img} alt="Agente" />
        <div className="social-icons">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="icon-social" />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="icon-social" />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} className="icon-social" />
          </a>
        </div>
      </div>
      <div className="card-info">
        <h3 className="agent-name">{nombre}</h3>
        <p className="agent-role">{posicion}</p>
      </div>
    </div>
  );
};

export default CardAgent;
