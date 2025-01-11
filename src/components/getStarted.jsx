import getStartedImage from '../assets/getStarted.png'
import bitcoin from '../assets/bitcoin.png'
import { useEffect, useState } from 'react'
import TrendingCoins from './trending'

const GetStarted=()=>{
    return(
        <div>
            <GetStartedCard/>
            <TrendingCoins/>
        </div>
    )
}


const GetStartedCard=()=>{
    return(
        <div className='flex flex-col mx-4 my-8 gap-6 p-4 rounded-lg items-center text-center text-white' style={{backgroundColor:'#4F6CFF'}}>

            <div className='flex flex-col items-center'>
                <img src={getStartedImage} className='w-36'></img>
                <h1 className='text-lg font-semibold'>Get Started with KoinX for FREE</h1>
            </div>

            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae labore nulla molestias magnam tempora mollitia velit quos tempore corporis?</p>

            <button className='flex items-center justify-center gap-4 bg-white text-black py-2 px-6 text-sm font-semibold rounded-md'>Get Started for free <span className='material-symbols-outlined'>arrow_forward</span></button>

        </div>
    )
}



export default GetStarted