import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";

export default function Page() {
    return (
        
        <>
            <Navbar key={2} page='home'/>
            <Main/>
            <Projects/>
        </>
        
    )
  }