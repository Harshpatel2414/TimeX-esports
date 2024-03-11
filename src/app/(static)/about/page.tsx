import Image from 'next/image'
import AboutCard from '../../../components/about/AboutCard'
import { about } from '../../../data'
import { FaTrophy } from 'react-icons/fa'

const About = () => {
 
  return (
    <div>
      <div className='py-10'>
        <h1 className='text-2xl lg:text-5xl text-center font-bold tracking-widest'>About Page</h1>
      </div>
      <div className="bg-zinc-950 w-full relative z-0 flex flex-col-reverse py-24 lg:flex-row items-center gap-20 px-5 justify-center lg:justify-around">
        <div className="flex flex-col lg:w-1/2">
          <div className=" text-center lg:text-left">
            <p className="text-md uppercase text-red-600 mb-2">powerfull service</p>
            <h1 className="text-xl uppercase md:text-3xl lg:text-5xl font-bold">Our custom Matches<br /> done on time</h1>
          </div>
          <div className="grid md:grid-cols-2 py-10">
            {/* about matches cards */}
            {about && about.map((card) => {
              return <AboutCard key={card.id} {...card} />
            })}
          </div>
        </div>
        <div className="relative">
          <div className="bg-container top-0 rotate-12 -z-10 w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] absolute"></div>
          <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center bg-zinc-900 p-8 z-10">
            <Image quality={100} width={300} height={300} className="-mt-24" src="/images/pubg-character.png" alt="" />
          </div>
          <div className="flex items-center gap-4 justify-end mt-10 ">
            <div className="text-right">
              <p className="text-xl font-bold tracking-wider">Tournament</p>
              <span className="text-md text-zinc-600">Matches</span>
            </div>
            <FaTrophy className="h-12 w-12 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
