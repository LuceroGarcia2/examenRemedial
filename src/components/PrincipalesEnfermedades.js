import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, PieController, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, PieController, Tooltip, Legend);

const PrincipalesEnfermedades = () => {
  const data = {
    labels: ['Diabetes', 'Hipertensión Arterial', 'Asma', 'Cáncer', 'Alzheimer'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '800px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PrincipalesEnfermedades;

