import React from 'react';
import '../estilos/estilos.css';

const EntradaContrasena = ({ contrasena, setContrasena, mostrar, toggleMostrar }) => (
  <input
    className="campo"
    type={mostrar ? 'text' : 'password'}
    placeholder="Ingrese su contraseña..."
    value={contrasena}
    onChange={(e) => setContrasena(e.target.value)}
  />
);

export default EntradaContrasena;