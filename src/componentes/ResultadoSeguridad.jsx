import React from 'react';
import '../estilos/estilos.css';
import { evaluarSeguridad } from '../utils/validadorContrasena';

const ResultadoSeguridad = ({ contrasena }) => {
  const estado = evaluarSeguridad(contrasena);
  return (
    <p className="estado">La seguridad de su contraseña es: <strong>{estado}</strong></p>
  );
};

export default ResultadoSeguridad;