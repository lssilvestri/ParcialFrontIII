import CardStyles from "../styles/Card.module.css";
function Card({ nombre, direccion }) {
  return (
    <div className={CardStyles.card}>
      <h2>Información Ingresada</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Canción:</strong> {direccion}</p>
    </div>
  );
}

export default Card;
