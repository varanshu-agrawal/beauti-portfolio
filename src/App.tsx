import Hero from "./sections/Hero"
import Garage from "./sections/Garage"
import Nightlife from "./sections/Nightlife"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Garage />
      <Nightlife />
      <Contact />
    </div>
  )
}

export default App