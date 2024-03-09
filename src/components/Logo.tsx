import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <div className=" flex gap-4 items-center text-xl font-bold">
            <Link href='/'>
                <Image width={90} height={40} quality={100} priority src="/images/logo.png" alt="TIM3-X" />
            </Link>
        </div>
    )
}

export default Logo
