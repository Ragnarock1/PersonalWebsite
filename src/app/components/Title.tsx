import { abril } from '../fonts/fonts'
import { twMerge } from 'tailwind-merge'

export default function Title({page}: {
    page: string
    }) 
{
    if(page === 'home'){

        return (
            <>
                <h1 className="text-7xl animate-slideUpFast">Rares Ciocirlan</h1>
                <h1 className={twMerge('text-3xl mt-6 tracking-wider animate-slideUpSlow',abril.className)}>Fullstack Engineer</h1>
            </>
        ) 
        }
    else {
        return (
            <>  
                <h1 className="md:text-left text-center text-white text-7xl animate-slideDownFast">Let&apos;s collaborate</h1>
                <h1 className={twMerge('md:text-left text-center text-gray-400 text-3xl mt-6 tracking-wider animate-slideDownSlow',abril.className)}>I&apos;m open to work</h1>
            </>
        ) 
        }
    }