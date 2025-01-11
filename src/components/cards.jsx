import About from "./about";
import Overview from "./overview";
import Sentiments from "./sentiments";
import Team from "./team";

import Tokenomics from "./tokenomics";
import Midheader from "./midheader";

const Cards = () => {
    return (
        <div className="cards">
            <Midheader/>
            <div>
            <Overview/>
            <Sentiments/>
            <About/>
            <Tokenomics/>
            <Team/>
            </div>
        </div>
    );
};

export default Cards;