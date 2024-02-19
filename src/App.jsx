import { BrowserRouter } from "react-router-dom"
import Hero from './pages/Hero'
import Main from "./pages/Main"
import Content from "./pages/Content"
import Footer from "./pages/Footer"
import { Contact } from "./pages/Contact"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider>
    <BrowserRouter>
    <div className="z-0 bg-[#152238] text-white">
     <Hero />
     <Main />
     <Content />
     <Contact />
     <Footer />
    </div>
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
