"use client"
import { arimo , abril } from '../fonts/fonts'
import { twMerge } from 'tailwind-merge'
import Title  from './Title'
import Notifications from "./Notifications"

export default function Collab(){

    return  (

        <>
            <div className={twMerge("h-screen bg-[#0c1c2a] grid md:grid-cols-2 grid-cols-1 gap-1 md:justify-items-center items-center ", arimo.className)}>
            
            <div className="col-span-1 overflow-hidden">
                <Title page='collab'/>
            </div>
            <div className={twMerge("col-span-1 text-xl grid",abril.className)}>

                <Notifications/>    
                
            </div>
            
            </div>
        </>

    )
}