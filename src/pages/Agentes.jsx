import CardAgent from "../components/CardAgent";
import agente1 from "../assets/img/team-1.jpg";
import agente2 from "../assets/img/team-2.jpg";
import agente3 from "../assets/img/team-3.jpg";
import agente4 from "../assets/img/team-4.jpg";
import "./agentes.css";
const agentes = [
  {
    id: 1,
    nombre: "Full Name",
    posicion: "Designation",
    img: agente1,
  },
  {
    id: 2,
    nombre: "Full Name",
    posicion: "Designation",
    img: agente2,
  },
  {
    id: 3,
    nombre: "Full Name",
    posicion: "Designation",
    img: agente3,
  },
  {
    id: 4,
    nombre: "Full Name",
    posicion: "Designation",
    img: agente4,
  },
];

const Agentes = () => {
  return (
    <div className="agents" id="agente-propiedad">
      <h2 className="agents-title">Agentes Inmobiliarios</h2>
      <p className="agents-p">
        Nuestros agentes inmobiliarios están comprometidos a ayudarte a
        encontrar la propiedad ideal. Con su experiencia y conocimiento del
        mercado, te guiarán en cada paso para asegurarte de tomar la mejor
        decisión, ya sea para compra, venta o alquiler.
      </p>
      <div className="agents-flex">
        <div className="cards-agents ">
          {agentes.map((agent) => (
            <CardAgent key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agentes;
