import { useRecoilValue } from 'recoil';
// import fundamentalsData from '../mockdata/fundamentals'
import { dataAtom } from '../utils/state';

const Overview = () => {
    

    let data=useRecoilValue(dataAtom)
    if (!data) {
        return <div>Loading...</div>;
      }
    // console.log(data)
    data=data.market_data;
    const fundamentalsData=[
        {
            title:'Bitcoin Price',
            value:`$${data.current_price.usd}`
        },
        {
             title:'24h Low/ 24h High',
            value:`$${data.high_24h.usd} / $${data.low_24h.usd}`
        },
        {
             title:'Trading Volume',
            value:`$${data.total_volume.usd}`
        },
        {
             title:'Market Cap Rank',
            value:`$${data.market_cap_rank}`
        },
        {
             title:'Market Cap',
              value:`$${data.market_cap.usd}`
        },
        {
             title:'Volume/Market Cap',
            value:`$${data.market_cap_fdv_ratio}`
        },   
    ]

    return (
        <div className="overview box flex flex-col  py-4 md:py-8 md:gap-4">
            <Performance data={data}/>
            <Fundamentals fundamentalsData={fundamentalsData}/>
        </div>
    );
};

const Performance = ({data}) => {
    // console.log(data)
    return (
        <div className="performance flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-semibold">Performance</h1>
            <PerformanceMeter min={data?.low_24h?.usd||undefined} max={data.high_24h.usd ||undefined} value={data.current_price.usd ||undefined} mintext={`Today's Low`} maxtext={`Today's High`}/>
            <PerformanceMeter min={16930} max={49743}  mintext={`52W Low`} maxtext={`52W High`}/>
        </div>
    );
};

const PerformanceMeter = ({ min, max, value,mintext,maxtext }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return(
        <div className="flex items-center justify-between my-2">
            <div className="meterContainer-text">
                <h1 className="text-gray-500 text-sm md:text-lg">{mintext}</h1>
                {min&&<h1>{min}</h1>}
            </div>


            <div className="meter-container">
            {/* gradient meter */}
            <div className="meter-bar">
                {value&&<div
                className="pointer"
                style={{left: `${percentage}%`}}
                >
                ▲
                </div>}
            </div>
            {/* Display value */}
            {value&&<div className="value-label" style={{left:`${percentage}%`}}>
                ${value.toFixed(2)}
            </div>}

            </div>
            
            
            <div className="meterContainer-text">
            <h1 className="text-gray-500 text-sm md:text-lg">{maxtext}</h1>
            {max&&<h1>{max}</h1>}
            </div>

        </div>
    );
};


const Fundamentals = ({fundamentalsData}) => {
    return (
        <div className="fundamentals mt-10 flex flex-col gap-3">
            <h1 className="text-xl md:text-2xl text-gray-600 font-semibold">Fundamentals</h1>
            <div className='flex flex-col md:grid grid-cols-2 md:gap-x-40'>
                {
                    fundamentalsData.map((e)=>{
                        return(<FundamentalsRow title={e.title} value={e.value}/>)
                    })
                }
            </div>
        </div>
    );
};

const FundamentalsRow=({title,value})=>{
  return(
    <div className="flex justify-between items-center py-4 border-b text-sm md:text-lg">
        <h1 className="text-gray-500">{title}</h1>
        <h1>{value}</h1>
    </div>
  )
}

export default Overview;