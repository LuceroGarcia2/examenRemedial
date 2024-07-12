import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VideojuegosMasVendidos = () => {
  const data = {
    labels: ['PUBG', 'Mario Kart 8 + Deluxe', 'The Elder Scrolls V: Skyrim', 'Red Dead Redemption 2', 'Super Mario Bros'],
    datasets: [
      {
        label: 'Ventas (millones)',
        data: [30, 25, 20, 15, 10],
        backgroundColor: 'rgba(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 1)',
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

export default VideojuegosMasVendidos;
