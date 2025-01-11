import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import triangle from '../assets/triangle.png';
import bitcoin from '../assets/bitcoin.png';
import generateMockData  from "../mockdata/generateMockData";

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
import TradingViewWidget from "./TradingViewWidget";
import { useRecoilValue } from "recoil";
import { dataAtom } from "../utils/state";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const Hero = () => {
  const [activeButton, setActiveButton] = useState(100);
  const handleButtonClick = (points) => {
    setActiveButton(points); //set active button
  };
  return (
    <div  className="box md:py-10">
    <Toptext/>
    <BoxTopDetails/>
    <div>
      <LineGraph handleButtonClick={handleButtonClick} activeButton={activeButton}/>
    </div>
    </div>
  );
};

const Toptext=()=>{
  return(
    <div className="top-text flex flex-col gap-3 my-2">
       <h1 className="flex items-center gap-2"><span className="text-gray-500">Cryptocurrencies</span><span className="text-gray-500">&gt;&gt;</span><span className="font-semibold">Bitcoin</span></h1>

       <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
            <img src={bitcoin} className="w-8 h-8"></img>
            <h1 className="flex items-center gap-2"><span className="text-2xl md:text-3xl font-semibold">Bitcoin</span><span className="text-sm text-gray-600 font-semibold">BTC</span></h1>
        </div>
        <h1 className="bg-gray-400 text-white text-lg px-2 rounded-sm">Rank#1</h1>
       </div>
    </div>
  )
}

const BoxTopDetails=()=>{
  const data=useRecoilValue(dataAtom)

  if(!data)return(<div>Loading...</div>);
  let md=data.market_data;
  // console.log(md)
  
    return(
    <div className="top-details flex border-b items-center py-6 gap-8">
    <div className="money">
        <h1 className="text-2xl font-semibold">${md.current_price.usd}</h1>
        <h1 className="text-lg font-semibold">₹${md.current_price.inr}</h1>
    </div>
    <div className="flex gap-2">
    <span className="flex items-center gap-1 p-1 bg-green-100 text-green-600 text-xs md:text-md rounded-sm"><img src={triangle} className="w-2 h-2"></img>{md.price_change_percentage_24h_in_currency.usd.toFixed(2)
    }</span>
    <span className="text-sm">(24H)</span>
    </div>
  </div>
  )
  
}

const LineGraph=({handleButtonClick,activeButton})=>{
  
  return(
  <div className="graph pt-4">
  <div className=" flex flex-col">
  <h1 className="graph-title text-md md:text-lg font-semibold">Bitcoin Price Chart (USD)</h1>
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

<div className="h-56 md:h-96 w-full my-2">
<TradingViewWidget/>
</div>

</div>
)}

export default Hero;
