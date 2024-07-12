import React from 'react';
import ParidadPesoDolar from './components/ParidadPesoDolar';
import VideojuegosMasVendidos from './components/VideojuegosMasVendidos';
import ComparativaBolsa from './components/ComparativaBolsa';
import PrincipalesEnfermedades from './components/PrincipalesEnfermedades';
import PartesMundo from './components/PartesMundo';
import EstadisticaIMC from './components/EstadisticaIMC';


function App() {
  return (
    <div>
      <h1>Paridad Peso/Dólar</h1>
      <ParidadPesoDolar />
      <h1>Videojuegos más Vendidos 2023</h1>
      <VideojuegosMasVendidos />
      <h1>Comparativa de la Bolsa</h1>
      <ComparativaBolsa />
      <h1>Principales Enfermedades</h1>
      <PrincipalesEnfermedades />
      <h1>Partes del mundo</h1>
      <PartesMundo />
      <h1>EstadisticaIMC</h1>
      <EstadisticaIMC />

    </div>
  );
}

export default App;
