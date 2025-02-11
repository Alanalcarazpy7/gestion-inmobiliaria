import "./buttonFilter.css";

const ButtonFilter = ({ title, onClick, isActive }) => {
  return (
    <div className="container-buttonFilter">
      <button
        onClick={() => onClick(title)}
        className={isActive ? "active" : ""}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonFilter;
