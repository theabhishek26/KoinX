import HorizontalCard from "./horizontalCards";

const Sentiments=()=>{
 return(
    <div className="box py-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Sentiment</h1>
        <div className="events flex flex-col gap-3">
            <h1 className="text-gray-500 font-semibold text-xl">Key Events</h1>
            <HorizontalCard/>
            <Estimates buy={76} hold={8} sell={16}/>
        </div>
    </div>
 )
}

const Estimates=({buy,hold,sell})=>{
    return(
        <div className=" flex flex-col gap-5 pb-4">
            <h1 className="text-gray-500 font-semibold text-xl">Analyst Estimates</h1>
            <div className="grid grid-cols-[150px_200px] justify-center">
                <div className="circle bg-green-50 flex items-center justify-center text-4xl font-semibold h-28 w-28 rounded-full"><span className="text-green-600">{`${buy}%`}</span></div>
                <div className="bars flex flex-col gap-4">
                    <div className="flex items-center gap-4"><span>Buy</span><div className={`bg-green-600 rounded-sm h-2 w-[${buy}%]`}></div><span>{`${buy}%`}</span></div>
                    <div className="flex items-center gap-4"><span>Hold</span><div className={`bg-gray-400 rounded-sm h-2 w-[${hold}%]`}></div><span>{`${hold}%`}</span></div>
                    <div className="flex items-center gap-4"><span>Sell</span><div className={`bg-red-600 rounded-sm h-2 w-[${sell}%]`}></div><span>{`${sell}%`}</span></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sentiments;