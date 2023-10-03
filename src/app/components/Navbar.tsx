'use client'
import Link from 'next/link'
import { useEffect , useState } from 'react'
import { Abril_Fatface } from 'next/font/google'

const abril = Abril_Fatface({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Navbar({
    page
}:{
    page: string
}){

    if(page === 'home'){
        return (

            <nav className={abril.className}>
                <div className="bg-white flex justify-between p-8 text-3xl">
                    <div >./</div>
                    <div >Rares</div>
                    <div>
                        { 
                            // Add contact link
                        }
                        <Link href="/" >Contact</Link>
                    </div>
                </div>
                <hr className="border-2 border-[#A8A5A5] animate-slideIn"/>
            </nav>
            
        )
    }
    return (

        <nav className={abril.className}>
            <div className="bg-[#102638] text-gray-300 flex justify-between p-8 text-3xl">
                <div >./</div>
                <div >Rares</div>
                <div>
                    { 
                        // Add contact link
                    }
                    <Link href="/" >Contact</Link>
                </div>
            </div>
            <hr className="border-2 border-white animate-slideIn"/>
        </nav>
        
    )
}
