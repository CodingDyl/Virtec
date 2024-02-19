import { BrowserRouter } from "react-router-dom"
import Hero from './pages/Hero'
import Main from "./pages/Main"
import Content from "./pages/Content"
import Footer from "./pages/Footer"

function App() {

  return (
    <BrowserRouter>
    <div className="z-0 bg-[#152238] text-white">
     <Hero />
     <Main />
     <Content />
     <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
