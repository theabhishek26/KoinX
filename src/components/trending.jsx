import { useRecoilValue } from "recoil";
import { trendingDataAtom } from "../utils/state";

const TrendingCoins=()=>{
      let data=useRecoilValue(trendingDataAtom)
      
      if(!data)
        return(<div>Loading....</div>)

    //   console.log(data);
      const trendingCoins=data.coins;
      
    return(
        <div className='bg-white p-4 flex flex-col gap-4 rounded-md border'>
          <h1 className='text-[22px] font-semibold'>Trending Coins (24h)</h1>

          <div className='coins flex flex-col gap-2 md:gap-6'>
          {
            trendingCoins.map((coin)=>{return(<TrendingCoinsRow title={coin.item.name} image={coin.item.thumb} change={coin.item.data.price_change_percentage_24h.usd}/>)
            })
          }
          </div>

        </div>
    )
}

const TrendingCoinsRow=({title,image,change})=>{
   return(
    <div className='flex justify-between items-center'>

      <div className='flex items-center gap-2'>
        <img src={image} className='w-8'></img>
        <h1>{title}</h1>
      </div>
      <div className='flex items-center px-1 rounded-md text-sm w-16 justify-start' style={{color:`${(change>0?'green':'red')}`}}><span>{change>0?'🔼':'🔽'}</span>{change.toFixed(2)}%</div>

    </div>
   )
}

export default TrendingCoins;