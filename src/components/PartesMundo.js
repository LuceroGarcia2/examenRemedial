import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, RadarController, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, RadarController, RadialLinearScale, Title, Tooltip, Legend);

const PartesMundo = () => {
  const data = {
    labels: ['América', 'Europa', 'Asia', 'África', 'Oceanía'],
    datasets: [
      {
        label: 'partes del mundo',
        data: [28, 26, 24, 22, 25],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  
        borderColor: 'rgba(255, 99, 132, 1)',       
        borderblack: 20,                             
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default PartesMundo;
