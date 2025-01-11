import React, { useEffect, useState,useRef } from "react";
import { Line } from "react-chartjs-2"
// import cryptoData from '../mockdata/cryptocurrencies'
import { useRecoilValue } from "recoil";
import { trendingDataAtom } from "../utils/state";


const AlsoLike=()=>{
  const data=useRecoilValue(trendingDataAtom);

  if(!data)return(<div>Loading...</div>)

    //saving crypto data
    const cryptoData=[];
    const coinsArr=data.coins;
    coinsArr.forEach(coin => {
       const obj={
          title:coin.item.name,
          image:coin.item.thumb,
          growth:coin.item.data.price_change_percentage_24h.usd.toFixed(2),
          price:coin.item.data.price.toFixed(2),
          sparkline:coin.item.data.sparkline
       }
       cryptoData.push(obj);
    });

  return(
    <div className="flex flex-col gap-4 md:px-10 md:py-16">
        <AlsoLikeRow rowData={cryptoData} title={'You May Also Like'}/>
        <AlsoLikeRow rowData={cryptoData} title={'Trending Coins'}/>
    </div>
  )
}

const AlsoLikeRow=({rowData,title})=>{
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
          const { scrollLeft, clientWidth } = scrollRef.current;
          const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
          scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
      };
    return(
        <div className="flex flex-col">
            <h1 className=" text-lg md:text-2xl font-semibold">{title}</h1>
            <div className="horizontalCard infocards flex gap-2 overflow-scroll">
            <button className="scroll-button left" onClick={() => scroll("left")}>
                {"<"}
            </button>
             
             <div className="card-container" ref={scrollRef} style={{gap:'0'}}>
                {
                    rowData.map((cryptocurrency)=>{
                        return <InfoCard image={cryptocurrency.image} title={cryptocurrency.title} growth={cryptocurrency.growth} price={cryptocurrency.price} sparkline={cryptocurrency.sparkline}/>
                    })
                }
            </div>
                <button className="scroll-button right" onClick={() => scroll("right")}>
            {">"}
            </button>
            </div>
            
        </div>
    )
}

const InfoCard=({image,title,growth,price,sparkline})=>{   
    return(
        <div className="box py-1 md:py-3">

            <div className="topPart">
                <div className="flex gap-1 text-sm items-center">
                  <img src={image} className="w-4 h-4"></img>
                  <p>{title}</p>
                  <p className="text-xs px-1 rounded-sm" style={{color:`${(growth>0?'green':'red')}`, backgroundColor:`${growth>0?'#DDFFBB':'#FFE8E8'}`}}>{growth}</p>
                </div>
                <h1 className="font-semibold">${price}</h1>
            </div>

            <div className="w-40">
              <img src={sparkline} className=""></img>
            </div>
        </div>
    )
}

export default AlsoLike;