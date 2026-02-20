import { useEffect, useRef } from "react"
import { gsap } from "../utils/gsap"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
    )
  }, [])

  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          NOCTURNAL
          <br />
          MOTORS
        </h1>

        <p className="mt-6 text-gray-400">
          Built for brands that move in silence.
        </p>
      </div>
    </section>
  )
}