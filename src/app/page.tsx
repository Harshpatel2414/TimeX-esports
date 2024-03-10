import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import SectionHead from "@/components/SectionHead";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <section className="gap-4 justify-center items-center flex flex-col w-full border-b-2 border-container">
        <div className="bg-home fixed bg-cover bg-center bg-no-repeat opacity-25 w-full h-screen -z-10"></div>
        <div className="flex flex-col lg:flex-row gap-10 items-center p-10 lg:py-24">
          <div className="flex flex-col gap-5">
            <ul className="flex gap-4 font-bold">
              <li>Play</li>
              <li><span className="text-container">&bull;</span> Earn</li>
              <li><span className="text-container">&bull;</span> Enjoy</li>
            </ul>
            <div className="md:w-2/3">
              <p className="text-md mb-2 text-container">Everyday</p>
              <h1 className="uppercase text-left text-3xl md:text-4xl lg:text-6xl tracking-wider font-bold">Ultimate <span className="text-container">bgmi</span> matches</h1>
            </div>
            <Link className="py-2 px-5 rounded-lg hover:bg-red-500 text-lg text-zinc-900 bg-container w-fit" href="/matches">Register</Link>
          </div>
          <div className="relative">
            <Image width={320} height={320} quality={100} className="drop-shadow-lg w-80 md:w-96 object-cover" src="/images/char1.png" alt="" />
            <Image width={160} height={160} quality={100} className="absolute animate-pulse duration-800 ease-linear bottom-0 -left-10 w-40 drop-shadow-2xl" src="/images/bomb.png" alt="" />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 py-20 bg-zinc-950 border-b-2 border-container">
        <SectionHead title={'Experiance Just For'} para={'Latest Results'} />
        <div className="flex items-center flex-col gap-10">
          <h1 className="text-xl text-container pb-2 border-b-2">Squad Match</h1>
          <div className="flex flex-col flex-wrap md:flex-row gap-5 md:gap-20">
            <div className=" pr-20 md:p-0">
              <div className="flex items-center lg:flex-row-reverse w-fit flex-col gap-5">
                <div className="flex items-center ">
                  <div className="z-10 rounded-full ">
                    <Image height={96} width={96} quality={100} className="z-10 w-24 h-24 border-4 overflow-hidden border-container rounded-full object-cover" src="/images/char1.png" alt="" />
                  </div>
                  <div className="h-12 w-28 -ml-5 rounded-tr-full bg-container flex items-center justify-center">
                    <p className="text-lg font-bold tracking-widest">Win</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <h1 className="text-xl font-bold uppercase">Shi3LD Gaming</h1>
                  <p className="font-bold text-container">100$</p>
                </div>
              </div>
            </div>
            <div className=" pl-20 md:p-0">
              <div className="flex items-center lg:flex-row w-fit flex-col gap-5">
                <div className="flex items-center z-10 overflow-hidden flex-row-reverse">
                  <div className="z-10 rounded-full bg-zinc-950 overflow-hidden">
                    <Image height={96} width={96} quality={100} className="z-10 w-24 h-24 border-4 overflow-hidden border-container rounded-full object-cover" src="/images/char1.png" alt="" />
                  </div>
                  <div className="h-12 w-28 -mr-5 rounded-tl-full bg-container flex items-center justify-center">
                    <p className="text-lg font-bold tracking-widest">2nd</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold uppercase">Shi3LD Gaming</h1>
                  <p className="font-bold text-container">100$</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p>MARCH 01, 2023 | 10:30 AM</p>
            <p className="uppercase text-lg text-container">Nandurbar</p>
            <Link className="py-2 mt-4 rounded-lg px-4 bg-container" href='/matches/1'>
              View More
            </Link>
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="bg-zinc-950 w-full relative z-0 flex flex-col-reverse py-24 lg:flex-row items-center gap-20 px-5 justify-center lg:justify-around text-left border-b-2 border-container">
        <div className="flex flex-col md:w-2/3 lg:w-1/2 gap-4">
          <div className=" text-left lg:text-left uppercase tracking-wider">
            <p className="text-md text-red-600 mb-2">powerfull service</p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Our custom Matches<br /> done on time</h1>
          </div>
          <div>
            <p className="text-sm text-zinc-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, enim omnis. Beatae cupiditate doloremque dolorum.</p>
            <div className="flex items-center gap-4">
              <Link href={'/leaderboard'} className="btn-primary">Leaderboard</Link>
              <Link href={'/about'} className="btn-primary">View More</Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-container top-0 rotate-12 -z-10 w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] absolute"></div>
          <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center bg-zinc-900 p-8 z-10 relative">
            <Image width={300} height={300} quality={100} className="-mt-24 relative" src="/images/pubg-character.png" alt="" />
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
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around py-20 bg-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900 border-b-2 border-container">
        <div className="flex flex-col text-center items-center tracking-wider lg:w-1/3 gap-5">
          <div>
            <p className="card-heading">Total prize</p>
            <span className="text-5xl font-bold tracking-widest text-container">600rs</span>
          </div>
          <div>
            <p className="card-heading">Winner</p>
            <span className="text-5xl font-bold tracking-widest text-container">300rs</span>
          </div>
          <div className="flex gap-5 flex-col md:flex-row items-center justify-between w-full">
            <div>
              <p className=" card-subheading">1st Runner</p>
              <span className="tracking-widest text-4xl font-bold text-container">200rs</span>
            </div>
            <div>
              <p className="card-subheading">2nd Runner</p>
              <span className="tracking-widest text-4xl font-bold text-container">100rs</span>
            </div>
          </div>
        </div>
        <div>
          <Image width={300} height={300} quality={100} src="/images/format_artwok.png" alt="" className="w-[300px] drop-shadow-xl" />
        </div>
      </div>
    </>
  );
}
