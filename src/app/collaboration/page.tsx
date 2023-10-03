import Navbar from "../components/Navbar";
import Collab from "../components/Collab";

export default function Page() {
    return (
        
        <>
            <Navbar key={1} page='collab'/>
            <Collab/>
        </>
        
    )
  }