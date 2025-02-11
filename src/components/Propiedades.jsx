import "./propiedades.css";

const Propiedades = ({ img, title, cantPropiedades }) => {
  return (
    <div className="propiedad-card">
      <div className="propiedad-content">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{cantPropiedades}</p>
      </div>
    </div>
  );
};

export default Propiedades;
