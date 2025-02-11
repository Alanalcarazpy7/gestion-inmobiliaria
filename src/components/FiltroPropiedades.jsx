import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faRulerCombined,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import "./filtroPropiedades.css";
import { useState } from "react";

const FiltroPropiedades = ({
  nombre,
  direccion,
  categoria,
  img,
  tipo,
  precio,
  area,
  habitaciones,
  banos,
}) => {
  const [imgZoom, setImgZoom] = useState(false);

  return (
    <div className="container-filtro-propiedad">
      <div className="propiedad-imagen">
        <h3 className="propiedad-categoria">{categoria}</h3>
        <img
          onMouseEnter={() => setImgZoom(true)}
          onMouseLeave={() => setImgZoom(false)}
          src={img}
          alt=""
          className={imgZoom ? "zoom" :""}
        />
        <h3 className="propiedad-tipos">{tipo}</h3>
      </div>
      <div className="propiedad-info">
        <h2 className="propiedad-precio">{precio}</h2>
        <a href="#" className="propiedad-nombre">
          {nombre}
        </a>
        <div className="flex-icon">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ color: "rgb(0, 185, 142)" }}
          />
          <h4 className="propiedad-ubicacion">{direccion}</h4>
        </div>
      </div>
      <div className="propiedad-detalles">
        <div className="flex-icon">
          <FontAwesomeIcon
            icon={faRulerCombined}
            style={{ color: "rgb(0, 185, 142)" }}
          />
          <h4>{area}</h4>
        </div>
        <div className="flex-icon">
          <FontAwesomeIcon icon={faBed} style={{ color: "rgb(0, 185, 142)" }} />
          <h4>{habitaciones}</h4>
        </div>

        <div className="flex-icon">
          <FontAwesomeIcon
            icon={faBath}
            style={{ color: "rgb(0, 185, 142)" }}
          />
          <h4>{banos}</h4>
        </div>
      </div>
    </div>
  );
};

export default FiltroPropiedades;
