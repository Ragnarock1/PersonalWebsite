"use client"
import { Arimo , Abril_Fatface } from "next/font/google"
import Link from 'next/link'
import { useState , useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import Title  from './Title'
import Notifications from "./Notifications"


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

export default function Collab(){

    return  (

        <>
            <div className={twMerge("h-screen bg-[#0c1c2a] grid md:grid-cols-2 grid-cols-1 gap-1 md:justify-items-center items-center ", arimo.className)}>
            
            <div className="col-span-1 overflow-hidden">
                <Title  page='collab'/>
            </div>
            <div className={twMerge("col-span-1 text-xl ",abril.className)}>

                <Notifications/>    
                
            </div>
            
            </div>
        </>

    )
}