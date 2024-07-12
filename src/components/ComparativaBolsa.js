import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ComparativaBolsa = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Bolsa Mexicana de Valores',
        data: [50, 55, 53, 60, 62, 65, 63, 67, 70, 68, 72, 75],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Bolsa de Valores de Europa',
        data: [60, 58, 59, 63, 65, 70, 72, 75, 78, 76, 80, 82],
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
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

export default ComparativaBolsa;
