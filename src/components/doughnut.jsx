import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Crowdsale investors', 'Foundation'],
    datasets: [
      {
        data: [80, 20], //Data values for the chart
        backgroundColor: ['#007bff', '#ff9900'], //Colors for each section
        hoverBackgroundColor: ['#0056b3', '#cc7a00'], //Colors on hover
        borderWidth: 0, //Removes border between segments
      },
    ],
  };

  const options = {
    cutout: '60%', //Adjusts the size of the inner circle
    plugins: {
      legend: {
        display: true,
        position: 'right', //Moves the legend to the right
        labels: {
          usePointStyle: true, //Uses circle icons for legend labels
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true, //Shows tooltips on hover
      },
    },
  };

  return (
    <div className=' h-96'>
      <Doughnut data={data} options={options}/>
    </div>
  );
};

export default DoughnutChart;
