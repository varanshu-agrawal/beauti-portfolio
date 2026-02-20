import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../utils/gsap"

const projects = [
  {
    title: "AI Skin Analysis",
    desc: "Real-time face detection & analysis experience",
    tech: "React • WebGL • Tensorflow",
  },
  {
    title: "Virtual Try-On",
    desc: "Jewelry & makeup try-on engine",
    tech: "ThreeJS • React • AR",
  },
  {
    title: "RAD Camera Extension",
    desc: "Chrome extension with realtime capture",
    tech: "JS • Firebase • Chrome API",
  },
]

export default function Garage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      ".garage-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )

    cardsRef.current.forEach((card) => {
      if (!card) return

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(card, {
          rotateY: ((x / rect.width) - 0.5) * 10,
          rotateX: -((y / rect.height) - 0.5) * 10,
          transformPerspective: 800,
          duration: 0.3,
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        })
      })
    })

  }, [])

  const cardsRef = useRef<(HTMLDivElement | null)[]>([])


  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black px-6 md:px-16 py-32"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        Featured Machines
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            ref={(el) => (cardsRef.current[ i ] = el)}
            key={i}
            className="garage-card group relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm overflow-hidden cursor-pointer"
          >
            {/* glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/20 via-transparent to-blue-500/20" />

            <h3 className="text-2xl font-semibold relative z-10">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-3 relative z-10">
              {p.desc}
            </p>

            <p className="text-sm text-gray-500 mt-6 relative z-10">
              {p.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}