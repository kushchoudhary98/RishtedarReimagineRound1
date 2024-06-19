import { ReactLenis, useLenis } from 'lenis/react'
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {

  return (
    <ReactLenis root>
    <div>
      <Navbar />
      <Hero />
    </div>
    </ReactLenis>
  )
}

export default App
