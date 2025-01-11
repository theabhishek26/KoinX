import { useSetRecoilState } from "recoil";
import { trendingDataAtom } from "./state";
import { useEffect } from "react";

const useFetchTrendingData = () => {
  const setData = useSetRecoilState(trendingDataAtom); 
  const key = 'CG-yA2eoEvxYTQedxubg1wKnX7X'

   useEffect(() => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': key,
            },
          };  
          fetch('https://api.coingecko.com/api/v3/search/trending', options)
            .then((res) => {
              res.json().then((data)=>setData(data));
            })
            .catch((err) => console.error('error:', err));
        }, [key,setData]);
};

export default useFetchTrendingData;