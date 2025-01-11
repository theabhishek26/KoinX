import HorizontalCard from "./horizontalCards";

const Sentiments=()=>{
 return(
    <div className="box py-4 flex flex-col gap-4 md:py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Sentiment</h1>
        <div className="events flex flex-col gap-6">
            <div>
            <h1 className="text-gray-500 font-semibold text-xl md:text-2xl">Key Events</h1>
            <HorizontalCard/>
            </div>
            <Estimates buy={76} hold={8} sell={16}/>
        </div>
    </div>
 )
}

const Estimates=({buy,hold,sell})=>{
    return(
        <div className=" flex flex-col gap-5 pb-4">

            <h1 className="text-gray-500 font-semibold text-xl md:text-2xl">Analyst Estimates</h1>

            <div className="text-sm grid grid-cols-[150px_200px] md:grid-cols-2 justify-center items-center md:px-20 md:py-4">

                <div className="circle bg-green-50 flex items-center justify-center text-4xl md:text-6xl font-semibold h-28 w-28 md:h-48 md:w-48 rounded-full"><span className="text-green-600">{`${buy}%`}</span></div>

                <div className="bars flex flex-col gap-4 md:text-lg">

                    <div className="flex items-center gap-4"><span>Buy</span><div className={`bg-green-600 rounded-sm md:rounded-md h-2`} style={{width: `${buy}%`}}></div><span>{`${buy}%`}</span></div>
                    <div className="flex items-center gap-4"><span>Hold</span><div className={`bg-gray-400 rounded-sm md:rounded-md  h-2`} style={{width: `${hold}%`}}></div><span>{`${hold}%`}</span></div>
                    <div className="flex items-center gap-4"><span>Sell</span><div className={`bg-red-600 rounded-sm md:rounded-md  h-2`} style={{width: `${sell}%`}}></div><span>{`${sell}%`}</span></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sentiments;