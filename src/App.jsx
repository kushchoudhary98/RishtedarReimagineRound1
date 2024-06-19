import { ReactLenis, useLenis } from 'lenis/react'
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Testimonial from './sections/Testimonial'
import PromiseSection from './sections/PromiseSection'
import Footer from './sections/Footer'

function App() {

  return (
    <ReactLenis root>
      <div>
        <Navbar />
        <Hero />
        <PromiseSection />
        <Testimonial />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
