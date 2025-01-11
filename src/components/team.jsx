import { useMediaQuery } from 'react-responsive'
import image from '../assets/member1.jpg'
import team from '../mockdata/teamdetails'
import AlsoLike from './alsoLike'

//includes alsolike for small devices
const Team=()=>{
  const isPhone = useMediaQuery({ maxWidth: 700 });
  return(
    <div className='box flex flex-col gap-6 py-4 md:py-10'>
       <TeamSection/>
       {isPhone&&<AlsoLike/>}
    </div>
  )
}

const TeamSection=()=>{
    return(
        <div className="flex flex-col gap-6">
            <h1 className='text-2xl md:text-3xl md font-semibold'>Team</h1>
            <p className='md:text-lg'>Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Aut rerum veritatis minima ex perspiciatis rem, libero ab iusto laboriosam temporibus.</p>

            <div className='members flex flex-col items-center gap-4'>
                  {
                    team.map((member)=>{
                        return(<TeamCard image={member.image} title={member.title} designation={member.designation} description={member.description} />)
                    })
                  }
            </div>
        </div>
    )
}

const TeamCard=({image,title,designation,description})=>{
    return(
        <div className='flex flex-col items-center bg-blue-100 px-3 py-4 md:px-6 rounded-md gap-4 md:grid md:grid-cols-6'>
            <div className='profile flex flex-col items-center gap-1 col-span-1'>
                <img src={image} className='w-24 rounded-md border'></img>
                <h1 className='font-semibold'>{title}</h1>
                <h1 className='text-xs text-gray-500'>{designation}</h1>
            </div>
            <div className='description text-sm col-span-5 text-gray-700 md:px-4'>{description}</div>
        </div>
    )
}

export default Team

