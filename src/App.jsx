import { BrowserRouter } from "react-router-dom"
import Hero from './pages/Hero'

function App() {

  return (
    <BrowserRouter>
    <div className="z-0 bg-primary text-white">
     <Hero /> 
    </div>
    </BrowserRouter>
  )
}

export default App
