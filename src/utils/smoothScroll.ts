import Lenis from '@studio-freight/lenis'

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}