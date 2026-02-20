import { useEffect } from "react"
import { gsap } from "./utils/gsap"

import Hero from "./sections/Hero"
import Garage from "./sections/Garage"
import Nightlife from "./sections/Nightlife"
import Contact from "./sections/Contact"
import Grain from "./components/Grain"

function App() {

  useEffect(() => {
    gsap.to("#progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    })
  }, [])

  return (
    <div className="bg-black text-white relative">

      {/* PROGRESS BAR */}
      <div
        id="progress"
        className="fixed top-0 left-0 h-[3px] w-full bg-white z-[999] origin-left scale-x-0"
      />

      <Grain />

      <Hero />
      <Garage />
      <Nightlife />
      <Contact />
    </div>
  )
}

export default App