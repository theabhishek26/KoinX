import AlsoLike from "./components/alsoLike";
import Cards from "./components/cards";
import GetStarted from "./components/getStarted";
import Header from "./components/header";
import Hero from "./components/hero";
import useFetchData from "./utils/useFetchData";
import useFetchTrendingData from "./utils/useFetchTrendingData";

const App=()=>{
      useFetchData();
      useFetchTrendingData();
    return(
        <div>
            <Header/>
        <div className="flex flex-col md:grid grid-cols-4">
            <div className="col-span-3">
            <Hero/>
            <Cards/>
            </div>
            <div className="col-span-1">
            <GetStarted/>
            </div>
        </div>
        <div className="max-md:hidden">
             <AlsoLike/>
        </div>
        </div>
    )
}

export default App;