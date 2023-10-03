import Link from "next/link"

export interface NotifInfo {
    icon: JSX.Element;
    name: string;
}

export default function Notification({info} : {
    info: NotifInfo
}) {

    return (
        <>
            <div className="w-full h-24 rounded-lg border-gray-300/50 border-1 bg-gray-300/50 text-white">
                {info.icon}
                {(info.name === 'da') ? <Link href={info.name}>{info.name}</Link> : <p>{info.name}</p>}
            </div>
        </>
    )
}