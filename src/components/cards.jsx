import Overview from "./overview";
import Sentiments from "./sentiments";

const Cards = () => {
    return (
        <div className="cards">
            <Overview/>
            <Sentiments/>
        </div>
    );
};

export default Cards;