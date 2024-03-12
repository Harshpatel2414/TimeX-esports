import { aboutCardProps } from "../../../new-types"

const AboutCard = ({ icon, title, para }: aboutCardProps) => {
    return (
        <div className="flex gap-4 flex-col items-center md:items-start p-5 rounded-lg">
            <div>
                {icon}
            </div>
            <div className="capitalize text-center md:text-left">
                <h1 className="text-xl mb-2">{title}</h1>
                <p className="text-md text-zinc-700">{para}</p>
            </div>
        </div>
    )
}

export default AboutCard
