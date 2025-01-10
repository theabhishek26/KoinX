import fundamentalsData from '../mockdata/fundamentals'

const Overview = () => {
    return (
        <div className="overview box flex flex-col  py-4">
            <Performance/>
            <Fundamentals/>
        </div>
    );
};

const Performance = () => {
    return (
        <div className="performance flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Performance</h1>
            <PerformanceMeter min={46930} max={49343} value={48637} mintext={`Today's Low`} maxtext={`Today's High`}/>
            <PerformanceMeter min={16930} max={49743}  mintext={`52W Low`} maxtext={`52W High`}/>
        </div>
    );
};

const PerformanceMeter = ({ min, max, value,mintext,maxtext }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return(
        <div className="flex items-center justify-between my-2">
            <div className="meterContainer-text">
                <h1 className="text-gray-500 text-sm">{mintext}</h1>
                <h1>{min}</h1>
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
            <h1 className="text-gray-500 text-sm">{maxtext}</h1>
            <h1>{max}</h1>
            </div>

        </div>
    );
};


const Fundamentals = () => {
    return (
        <div className="fundamentals mt-10 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Fundamentals</h1>
            <div>
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
    <div className="flex justify-between items-center py-4 border-b text-sm">
        <h1 className="text-gray-500">{title}</h1>
        <h1>{value}</h1>
    </div>
  )
}

export default Overview;