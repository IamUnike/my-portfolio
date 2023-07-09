import Home from "./Pages/Home"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader";

function App() {
  useEffect(() => {
    AOS.init({
      once:true
    });
    AOS.refresh();
  }, []);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500) 
  }, [])

  return(
    <div>
      { loading ? <Loader /> :  <Home /> }
        
    </div>
  )
}

export default App
