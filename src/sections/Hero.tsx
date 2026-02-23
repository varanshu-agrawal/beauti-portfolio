import { useEffect, useRef } from "react"
import { gsap } from "../utils/gsap"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // intro animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, delay: 0.4, duration: 1.2 }
    )

    // scroll fade out
    gsap.to(sectionRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* neon gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,80,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,140,255,0.2),transparent_60%)]" />

      <div className="text-center relative z-10 px-6">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-tight"
        >
          Colorful web experiences for bold brands.
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Built for brands that move in silence.
        </p>
      </div>
    </section>
  )
}