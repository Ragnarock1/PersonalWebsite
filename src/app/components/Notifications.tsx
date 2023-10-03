import  { FaLinkedin , FaAt ,  } from "react-icons/fa"
import { NotifInfo } from './Notification.tsx'
import Notification from './Notification.tsx'
const list = [
    {
        icon: FaLinkedin,
        name: 'https://www.linkedin.com/in/rares-ciocirlan-9b047a22b'
    },
    {
        icon: FaAt,
        name: 'rares.business@outlook.com'
    }
]
export default function Notifications(){

    return (
        <>
            {list.map((item: NotifInfo) => {
                
                <Notification info={item} />
            })}

        </>
    )
}