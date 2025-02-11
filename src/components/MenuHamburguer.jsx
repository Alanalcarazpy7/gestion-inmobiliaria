import { slide as Menu } from "react-burger-menu";
import "./MenuHamburger.css";
import { useState } from "react";

const MenuHamburguer = ({ isOpen }) => {
  const [selectedlink, setSelectedlink] = useState("");

  const handleChange = (e) => {
    const id = e.target.value;
    //console.log(id)
    if (id) {
      window.location.hash = id; // Cambia el hash en la URL
      setSelectedlink("");
    }
  };

  return (
    <div className="contain-hamburguer">
      <Menu
        isOpen={isOpen}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        noOverlay
      >
        <a className="menu-item" href="#home">
          Inicio
        </a>
        <a className="menu-item" href="#acerca">
          Acerca
        </a>

        <select
          className="menu-item"
          value={selectedlink}
          onChange={handleChange}
        >
          <option value="" hidden>
            Propiedad
          </option>
          <option value="lista-propiedades">Listas de propiedades</option>
          <option value="tipo-propiedades">Tipos de propiedades</option>
          <option value="agente-propiedad">Agentes Inmobiliarios</option>
        </select>

        <select
          className="menu-item"
          value={selectedlink}
          onChange={handleChange}
        >
          <option value="" hidden>
            Páginas
          </option>
          <option value="testimonios">Testimonios</option>
        </select>

        <a className="menu-item" href="#contacto">
          Contacto
        </a>
      </Menu>
    </div>
  );
};

export default MenuHamburguer;
