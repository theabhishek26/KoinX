import React, { useRef } from "react";
import cardIcon from '../assets/profit-chart.png'

const HorizontalCard = () => {
  const scrollRef = useRef(null);
  const dummyCardsArray=[1,2,3,4,5,6,7,8];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="horizontalCard">
      <button className="scroll-button left" onClick={() => scroll("left")}>
        {"<"}
      </button>
      <div className="card-container" ref={scrollRef}>
        {dummyCardsArray.map((_, index) =>{
            return (<Card index={index}/>)
        })}
      </div>
      <button className="scroll-button right" onClick={() => scroll("right")}>
        {">"}
      </button>
    </div>
  );
};

const Card=({index})=>{
    return(
        <div className="card md:py-4" key={index}>
        <img src={cardIcon} className="w-10 h-10"></img>
        <div className="texts flex flex-col gap-2 md:gap-4">
        <h1 className="font-semibold text-sm md:text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
        <p className="text-xs md:text-[13px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esseassumenda distinctio. Quia totam, perspiciatis architecto sint ratione voluptatum quod unde laudantium corporis, pariatur saepe itaque? Nisi voluptas</p>
      </div>
      </div>
    )
}

export default HorizontalCard;
