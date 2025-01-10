import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import triangle from '../assets/triangle.png';
import bitcoin from '../assets/bitcoin.png';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);
import generateMockData  from "../utils/generateMockData";

const Hero = () => {
  const [chartData, setChartData] = useState(null);
  const [dataPoints,setDataPoints] = useState(1000); //to set number of data points to show in graph
  const [activeButton, setActiveButton] = useState(100); //to set active button UI on graph
 
  useEffect(() => {
    let { labels, data } = generateMockData(1000); // Generate 1,000 data points

    //for showing limited data based on button pressed
    labels=labels.slice(0,dataPoints);
    data=data.slice(0,dataPoints);

    setChartData({
      labels,
      datasets: [
        {
          label: "Bitcoin Price (USD)",
          data,
          borderColor: "rgb(8, 87, 254)",
          backgroundColor: "rgba(75,192,192,0.2)",
          tension: 0.1, // Smooth curves
          borderWidth: 0.9,
          pointRadius:0
        },
      ],
    });
  }, [dataPoints]);

  const options = {
    responsive: true,
    plugins: {

    },
    scales: {
      x: {
        display: true,
        ticks: {
            font: {
              size:9, // font size for x-axis labels
            },
          },
      },
      y: {
        beginAtZero: false,
        ticks: {
            font: {
              size:9, // font size for x-axis labels
            },
          },
      },
    },
  };

  const handleButtonClick = (points) => {
    setDataPoints(points); //set data points to show in graph
    setActiveButton(points); //set active button
  };

  return (
    <div>
    <Toptext/>
    <div className="box">
     <BoxTopDetails/>
      <LineGraph chartData={chartData} options={options} handleButtonClick={handleButtonClick} activeButton={activeButton}/>
    </div>
    </div>
  );
};

const Toptext=()=>{
  return(
    <div className="top-text flex flex-col px-2 py-4 gap-3 my-2">
       <h1 className="flex items-center gap-2"><span className="text-gray-500">Cryptocurrencies</span><span className="text-gray-500">&gt;&gt;</span><span className="font-semibold">Bitcoin</span></h1>

       <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
            <img src={bitcoin} className="w-8 h-8"></img>
            <h1 className="flex items-center gap-2"><span className="text-2xl font-semibold">Bitcoin</span><span className="text-sm text-gray-600 font-semibold">BTC</span></h1>
        </div>
        <h1 className="bg-gray-400 text-white text-lg px-2 rounded-sm">Rank#1</h1>
       </div>
    </div>
  )
}

const BoxTopDetails=()=>{
  <div className="top-details flex justify-between border-b items-center py-6">
  <div className="money">
      <h1 className="text-3xl font-semibold">$16953.04</h1>
      <h1 className="text-xl font-semibold">₹13,42,343</h1>
  </div>
  <span className="flex items-center gap-1 p-1 bg-green-100 text-green-600"><img src={triangle} className="w-3 h-3"></img>2.51%</span>
  <span>(24H)</span>
</div>
}

const LineGraph=({chartData,options,handleButtonClick,activeButton})=>{
  
  return(
  <div className="graph pt-4">
  <div className=" flex flex-col">
  <h1 className="graph-title text-md font-semibold">Bitcoin Price Chart (USD)</h1>
  <nav className="flex gap-2 my-2">
  <button
    className={activeButton === 100 ? 'graph-active-btn' : 'graph-btn'}
    onClick={() => handleButtonClick(100)}>100</button>
  <button
    className={activeButton === 400 ? 'graph-active-btn' : 'graph-btn'}
    onClick={() => handleButtonClick(400)}>400</button>
  <button
    className={activeButton === 800 ? 'graph-active-btn' : 'graph-btn'}
    onClick={() => handleButtonClick(800)}>800</button>
  <button
    className={activeButton === 1000 ? 'graph-active-btn' : 'graph-btn'}
    onClick={() => handleButtonClick(1000)}>1000</button>
</nav>
  </div>
<div className="h-56 w-full mt-2">
{chartData ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
</div>
</div>)
}
export default Hero;
