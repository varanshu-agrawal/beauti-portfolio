import { useEffect, useRef } from "react"
import { gsap } from "../utils/gsap"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div ref={contentRef} className="text-center max-w-4xl relative z-10">
        <p className="uppercase tracking-[0.4em] text-gray-500 text-sm mb-6">
          Join the Garage
        </p>

        <h2 className="text-4xl md:text-7xl font-bold leading-tight">
          Let’s build something
          <br />
          unforgettable.
        </h2>

        <p className="text-gray-400 mt-8 text-lg">
          Available for freelance, premium brand experiences &
          global collaborations.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">

          <a
            href="mailto:30varanshu@gmail.com"
            className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Hire Me
          </a>

          {/* <a
            href="https://calendly.com/"
            target="_blank"
            className="px-10 py-4 rounded-full border border-white/30 hover:border-white transition"
          >
            Book a Call
          </a> */}

        </div>
        <p className="text-gray-600 text-sm mt-24">
          © 2026 Nocturnal Motors — Built by Varanshu
        </p>
      </div>
    </section>
  )
}