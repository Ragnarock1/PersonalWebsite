import { twMerge } from 'tailwind-merge'
import { arimo , abril } from '../fonts/fonts'
import Title  from './Title'
import Link from 'next/link'

export default function Main(){

    const page = 'home';

    return (
        <>
        <div className={twMerge("h-[600px] md:h-screen bg-[#f6efd466] grid md:grid-cols-2 grid-cols-1 gap-1 md:justify-items-center items-center relative", arimo.className)}>
            
            <div className="text-center md:text-left col-span-1 overflow-hidden">
                <Title key={page} page={page}/>

            </div>
            <div className={twMerge("col-span-1 text-xl md:text-2xl overflow-hidden grid ",abril.className)}>
                <div className="w-1/2 md:w-full justify-self-center text-white animate-slideUpSlow bg-[#1d3b53] border-4 border-[#1d3b53] rounded p-1">
                    <Link href='/collaboration' className="text-center">
                    Let&apos;s collaborate
                    </Link>
                </div>
                
                
            </div>
            
        <hr className="invisible md:visible border-2 border-[#A8A5A5] border-dashed origin-left left-1/3 translate-y-3/4 h-1/2  absolute" />

        </div>
        </>
    )
}