import smartphone from '../assets/smartphone.jpg'
import smartphone2 from '../assets/smartphone2.jpg'
const About=()=>{
 return(
    <div className="about box py-2 md:py-10 flex flex-col gap-8">
        <Texts/>
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Already Holding Crypto?</h1>
            <div className='flex flex-col gap-2 md:grid grid-cols-2 md:gap-16 border-b border-t md:py-6 md:px-8'>
            <Box title={'Calculate Your Profits'} image={smartphone} bgc1={'#4F8AFF'} bgc2={'#86FFD3'}/>
            <Box title={'Calculate Your tax liability'} image={smartphone2} bgc1={'#FF7560'} bgc2={'#FFAB68'}/>
            </div>
        </div>
        <div className='max-md:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse magnam optio ut illum repudiandae voluptas voluptate reprehenderit eligendi. Deserunt repellat ratione cupiditate quo nemo odio in minima autem qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus consequatur numquam tenetur sapiente architecto fugiat, sequi reprehenderit. Mollitia, vitae?!</div>
    </div>
 )
}

const Texts=()=>{
    return(
        <div className="flex flex-col text-sm text-gray-700 gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold">About Bitcoin</h1>
        <p className="flex flex-col gap-2 border-b py-2 md:py-4">
            <h1 className="text-md md:text-lg font-bold text-black">What is Bitcoin?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci, nihil similique saepe, voluptatem rem debitis neque impedit nostrum aliquam corporis excepturi voluptate cum sunt tempora atque aspernatur quo optio tempore. Quam pariatur a amet. Lorem ipsum dolor sit amet.</p>
        </p>
        <p className="flex flex-col gap-2 border-b py-2 md:py-4">
            <h1 className="text-md md:text-lg font-bold text-black">Lorem ipsum dolor sit amet.</h1>
            <p className="flex flex-col gap-4"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptas expedita debitis, laudantium at inventore obcaecati fuga, impedit sed commodi nam cupiditate quam itaque nisi? Natus nisi incidunt explicabo hic modi perferendis reiciendis impedit, tempore voluptatum blanditiis facilis recusandae asperiores.</span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptas expedita debitis, laudantium at inventore obcaecati fuga, impedit sed commodi nam cupiditate quam itaque nisi? Natus nisi incidunt explicabo hic modi perferendis reiciendis impedit, tempore voluptatum blanditiis facilis recusandae asperiores.</span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptas expedita debitis, laudantium at inventore obcaecati fuga, impedit sed commodi nam cupiditate quam itaque nisi? Natus nisi incidunt explicabo hic modi perferendis reiciendis impedit, tempore voluptatum blanditiis facilis recusandae asperiores.</span></p>
        </p>
    </div>
    )
}

const Box=({title,image,bgc1,bgc2})=>{
    return(
        <div>
            <div className="flex items-center rounded-md px-3 py-4 gap-6" style={{
                 background: `linear-gradient(to top left, ${bgc1}, ${bgc2})`}}>
                <img src={image} className='w-24 h-24 md:w-36 md:h-36 rounded-md'></img>
                <div className='px-2 md:px-6 flex flex-col gap-2'>
                    <h1 className='font-bold text-white md:text-xl'>{title}</h1>
                    <button className='bg-white flex item-center font-bold px-2 py-1 rounded-md text-sm gap-2 w-fit'>Check Now <span class="material-symbols-outlined">arrow_forward</span></button>
                </div>
            </div>
        </div>
    )
}


export default About;