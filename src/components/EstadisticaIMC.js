import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EstadisticaIMC = () => {
  const data = {
    labels: ['Normal', 'Sobrepeso', 'Obesidad1', 'Obesidad2', 'Obesidad3'],
    datasets: [
      {
        label: 'Ventas (millones)',
        data: [30, 25, 20, 15, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '800px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EstadisticaIMC;
