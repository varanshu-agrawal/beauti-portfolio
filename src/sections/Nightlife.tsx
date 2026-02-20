import { useEffect, useRef } from "react"
import { gsap } from "../utils/gsap"

export default function Nightlife() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
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

    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 60%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,120,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,140,255,0.18),transparent_60%)]" />

      <div className="absolute w-[40vw] h-[40vw] bg-pink-500/20 blur-[120px] rounded-full top-[-10%] left-[-10%] animate-pulse" />
      <div className="absolute w-[40vw] h-[40vw] bg-blue-500/20 blur-[120px] rounded-full bottom-[-10%] right-[-10%] animate-pulse" />

      <div ref={textRef} className="max-w-5xl text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold leading-tight">
          Built for nightlife,
          <br />
          luxury & bold brands.
        </h2>

        <p className="text-gray-400 mt-8 text-lg md:text-xl">
          I design & build high-impact web experiences for brands that want to
          stand out — not blend in.
        </p>

        <p className="text-gray-600 mt-24 uppercase tracking-[0.4em] text-sm">
          Available for freelance & global collaborations
        </p>
      </div>
    </section>
  )
}