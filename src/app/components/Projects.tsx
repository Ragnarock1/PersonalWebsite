import Image from 'next/image'
import Link from 'next/link'
import ghidulSS from '../../../public/ghidulSS.png'
import warriorsSS from '../../../public/warriorsSS.png'

export default function Projects(){

    return (

        <>
            <div className="grid grid-cols-3 justify-items-center m-4">
                <Link href="https://ghiduloaspetilor.com" target='_blank' className='col-span-1'>
                    <Image
                        src={ghidulSS}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </Link>
                <Link href="https://ghiduloaspetilor.com" target='_blank' className='col-span-1'>
                    <Image
                        src={warriorsSS}
                        width={500}
                        height={500}
                        alt="SOON"
                    />
                </Link>
                <div className='col-span-1 flex'>
                    <h1 className='text-center text-4xl self-center justify-center'>SOON</h1>
                </div>
            </div>
        </>
    )
}