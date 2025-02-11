import agente from "../assets/img/call-to-action.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import "./contacto.css"

const Contacto = () => {
  return (
    <div className="contact-container" id="contacto">
      <div className="contact-card">
        <img src={agente} alt="Agente certificado" className="agent-image" />
        <div className="contact-info">
          <h2 className="contact-title">
            Contacte con nuestro agente certificado
          </h2>
          <p className="contact-description">
            Comuníquese con nuestro agente certificado para obtener más
            información y asistencia personalizada. Estamos comprometidos en
            brindarle el mejor servicio, garantizando atención rápida y
            soluciones eficientes para sus necesidades.
          </p>
          <div className="contact-buttons">
            <button className="call-button">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <h4>Hacer una llamada</h4>
            </button>
            <button className="appointment-button">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <h4>Obtener Cita</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
