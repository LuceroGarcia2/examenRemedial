import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ParidadPesoDolar = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Paridad Peso/Dólar',
        data: [20, 19.5, 19.8, 20.1, 19.9, 20.2, 20.4, 20.3, 20.6, 20.5, 20.7, 20.9],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '800px', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ParidadPesoDolar;

