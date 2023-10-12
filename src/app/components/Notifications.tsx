import  { FaLinkedinIn , FaAt } from "react-icons/fa"
import Link from "next/link"
import { IconContext } from "react-icons"   

export default function Notifications(){

    return (
        <>  
        <IconContext.Provider value={{ color: "blue", className: "self-center ms-3" }}>
            <div className="w-1/2 md:w-full justify-self-center m-2 h-12 rounded-lg flex blur-sm hover:blur-none border-[#D0D9CF] border-1 bg-[#ffffff66]/40 text-black font-sans">
                <FaLinkedinIn/>
                <Link href="https://www.linkedin.com/in/rares-ciocirlan-9b047a22b/" className="self-center m-2">Rares LinkedIn</Link> 
            </div>
            <div className="w-1/2 md:w-full justify-self-center m-2 h-12 rounded-lg flex blur-sm hover:blur-none border-[#D0D9CF] border-1 bg-[#ffffff66]/40 text-black font-sans">
                <FaAt/>
                <p className="self-center m-2 overflow-auto">rares.business@outlook.com</p>        
            </div>
        </IconContext.Provider>
        </>
    )
}