import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { dataAtom } from '../utils/state';

const useFetchData = () => {
  const setData = useSetRecoilState(dataAtom); 
  const key = 'CG-yA2eoEvxYTQedxubg1wKnX7X'

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': key,
      },
    };

    fetch('https://api.coingecko.com/api/v3/coins/bitcoin', options)
      .then((res) => {
        res.json().then((data)=>setData(data));
      })
      .catch((err) => console.error('error:', err));
  }, [key, setData]);
};

export default useFetchData;
