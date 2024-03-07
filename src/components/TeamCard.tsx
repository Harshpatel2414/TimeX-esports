import Image from "next/image";

const TeamCard = ({ name, imageUrl, slot }) => {
    return (
        <div className='relative flex p-5 items-center justify-between w-full bg-zinc-900 rounded-lg md:max-w-[350px]'>
            <span className='pills'>Team {slot}</span>
            <div className='flex items-center gap-4'>
                <Image width={64} height={64} quality={100} className='w-16 h-16 rounded-full object-cover object-center border-2 border-container' src={imageUrl} alt="" />
                <h1 className='card-heading text-left'>{name}</h1>
            </div>
        </div>
    )
}

export default TeamCard;
