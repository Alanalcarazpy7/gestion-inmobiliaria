import "./nav.css";
import logo from "../assets/img/icon-deal.png";
import Button from "../components/Button";
import "../assets/hamburgers (1).css";
import MenuHamburguer from "../components/MenuHamburguer";
import { useState } from "react";

const Nav = () => {
  const [selectedPage, setSelectedPage] = useState("");

  // Función para manejar el cambio de hash y desplazamiento suave
  const handleChange = (e) => {
    const id = e.target.value;
    if (id) {
      window.location.hash = id; // Cambiar el hash en la URL
      setSelectedPage(""); // Resetear la selección del enlace
    }
  };

  return (
    <div className="background flex-header">
      <div className="logo-flex">
        <img src={logo} alt="logo" />
        <h3>Logo</h3>
      </div>
      <nav className="nav-flex">
        <a href="#home">Inicio</a>
        <a href="#acerca">Acerca</a>

        <select name="" value={selectedPage} onChange={handleChange}>
          <option value="" hidden>
            Propiedad
          </option>
          <option value="lista-propiedades">Listas de propiedades</option>
          <option value="tipo-propiedades">Tipos de propiedades</option>
          <option value="agente-propiedad">Agentes Inmobiliarios</option>
        </select>

        <select name="" value={selectedPage} onChange={handleChange}>
          <option value="" hidden>
            Páginas
          </option>
          <option value="testimonios">Testimonios</option>
        </select>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="add-propiedad">
        <Button
          title={"Add Propiedad"}
          size={"0.5rem"}
          border={"3px"}
          width={"100%"}
        />
      </div>
      <div className="menu-hammburguer">
        <MenuHamburguer />
      </div>
    </div>
  );
};

export default Nav;
