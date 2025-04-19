import React, { useState } from 'react';
import EntradaContrasena from './componentes/EntradaContrasena';
import BotonesAcciones from './componentes/BotonesAcciones';
import ResultadoSeguridad from './componentes/ResultadoSeguridad';
import './estilos/estilos.css';

const App = () => {
  const [contrasena, setContrasena] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const [contrasenaGenerada, setContrasenaGenerada] = useState('');

  return (
    <div className="contenedor">
      <h2>Verificador de contraseñas</h2>
      <EntradaContrasena
        contrasena={contrasena}
        setContrasena={setContrasena}
        mostrar={mostrar}
      />
      <BotonesAcciones
        mostrar={mostrar}
        toggleMostrar={() => setMostrar(!mostrar)}
        contrasena={contrasena}
        setContrasena={setContrasena}
        setContrasenaGenerada={setContrasenaGenerada}
      />
      <ResultadoSeguridad contrasena={contrasena} />
      <input
        className="campo"
        type="text"
        value={contrasenaGenerada}
        readOnly
        placeholder="Su contraseña generada es..."
      />
    </div>
  );
};

export default App;