import React, { useState } from "react";

const Midheader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  
  const menuOptions=["Overview","Fundamentals","NewsInsights","Sentiments","Team",
    "Technicals","Tokenomics"]

  return (
    <div className="mx-2 text-sm md:text-md border-b py-4 font-semibold bg-transparent">
      <ul className="midheader flex overflow-scroll gap-4">
        {menuOptions.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer px-2 py-1 ${
              activeIndex === index ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Midheader;
