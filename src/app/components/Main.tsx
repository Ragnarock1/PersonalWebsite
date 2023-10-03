"use client"
import { Arimo , Abril_Fatface } from "next/font/google"
import Link from 'next/link'
import { useState , useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import Title  from './Title'
 
const arimo = Arimo({
    display: 'swap',
    weight: '700',
    subsets: ['latin']
});

const abril = Abril_Fatface({
    display: 'swap',
    subsets: ['latin'],
    weight:'400'
});

export default function Main(){

    const [page, setPage] = useState('home');

    function handleSwitchScene(e:any){
        
        if(page === 'home'){ 
            return setPage('collab');
        }   
        return setPage('home');
    }

    return (
        <>
        <div className={twMerge("h-screen bg-[#f6efd466] grid md:grid-cols-2 grid-cols-1 gap-1 md:justify-items-center items-center relative", arimo.className)}>
            
            <div className="col-span-1 overflow-hidden">
                <Title key={page} page={page}/>

            </div>
            <div className={twMerge("col-span-1 text-2xl  overflow-hidden",abril.className)}>
                <div className="text-white animate-slideUpSlow bg-[#1d3b53] border-4 border-[#1d3b53] rounded p-1">
                    <Link href='/collaboration'>
                    Let&apos;s collaborate
                    </Link>
                </div>
                
                
            </div>
            
        <hr className="border-2 border-[#A8A5A5] border-dashed origin-left left-1/3 translate-y-3/4 h-1/2  absolute" />

        </div>
        </>
    )
}