import Button from "../components/Button";
import Carrusel from "../components/Carrusel.jsx";
import "./home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="grid-section">
        <div className="grid-left">
          <h1>
            Encuentra una<span> casa perfecta</span> para vivir con tu familia
          </h1>
          <p>
            Descubre el hogar ideal para ti, diseñado para brindarte confort y
            armonía. Encuentra la casa que se adapta a tu estilo de vida y
            necesidades, con espacios pensados para tu bienestar.
          </p>
          <Button
            title={"Empezar"}
            size={"1rem"}
            width={"40%"}
            border={"3px"}
          />
        </div>
        <div className="grid-right" id="acerca">
          <Carrusel />
        </div>
      </div>
    </div>
  );
};

export default Home;
