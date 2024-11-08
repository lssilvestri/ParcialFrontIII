import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card';

function App() {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [err, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (nombre.trim().length >= 3 && direccion.trim().length >= 6) {
      setError(false);
      setShowCard(true); 
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige la última canción que escuchaste</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingresa la canción"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <button type="submit">ENVIAR</button>
        {err && (
          <h3 style={{ color: "red" }}>
            Por favor, chequea que la información sea correcta
          </h3>
        )}
      </form>
      {showCard && <Card nombre={nombre} direccion={direccion} />}
    </div>
  );
}

export default App;

