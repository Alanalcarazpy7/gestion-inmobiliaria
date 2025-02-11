import "./button.css"
const Button = ({ title, size, width,border }) => {
  return (
    <button type="button" className="button" style={{width: width,borderRadius:border}
}>
      <h3 style={{ padding: `${size} `}}>{title}</h3>
    </button>
  );
}

export default Button
