import { BrowserRouter } from "react-router-dom"
import Hero from './pages/Hero'
import Main from "./pages/Main"

function App() {

  return (
    <BrowserRouter>
    <div className="z-0 bg-[#152238] text-white">
     <Hero />
     <Main />
    </div>
    </BrowserRouter>
  )
}

export default App
