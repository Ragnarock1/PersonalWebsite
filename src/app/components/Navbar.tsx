import Link from 'next/link'
import { abril } from '../fonts/fonts'

export default function Navbar({
    page
}:{
    page: string
}){

    if(page === 'home'){
        return (

            <nav className={abril.className}>
                <div className="bg-white grid grid-cols-3 justify-items-center p-8 text-2xl md:text-3xl">
                    <div className='col-span-1 justify-self-start'>
                        <Link href="/">./</Link>
                    </div>
                    <div className='col-span-1 justify-self-center'>
                        <Link href="/#projects">Projects</Link>
                    </div>
                    <div className='col-span-1 justify-self-end'>
                        { 
                            // Add contact link
                        }
                        <Link href="/collaboration" >Contact</Link>
                    </div>
                </div>
                <hr className="border-2 border-[#A8A5A5] animate-slideIn"/>
            </nav>
            
        )
    }
    return (

        <nav className={abril.className}>
            <div className="bg-[#102638] text-gray-300 grid grid-cols-3 justify-items-center p-8 text-2xl md:text-3xl">
                    <div className='col-span-1 justify-self-start'>
                        <Link href="/">./</Link>
                    </div>
                    <div className='col-span-1 justify-self-center'>
                        <Link href="/#projects">Projects</Link>
                    </div>
                    <div className='col-span-1 justify-self-end'>
                        { 
                            // Add contact link
                        }
                        <Link href="/collaboration" >Contact</Link>
                    </div>
            </div>
            <hr className="border-2 border-white animate-slideIn"/>
        </nav>
        
    )
}
