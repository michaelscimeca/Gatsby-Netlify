import gsap from 'gsap';
export function pageOut( node, e, exit, entry, outLength) {

  setTimeout(() => {
    window.scroll.update()
  }, (exit.length * 1000) + 100)

  let tl = gsap.timeline();

  tl.to(node, {
    onStart: () => {
      window.scroll.stop()
    },
    duration: .2,
    opacity: 0,
    y: "20vh",
  })
}

export function pageIn(node, exit, entry, e) {
  gsap.from(node, {
    opacity: 0,
    delay: .4,
    y: "20vh",
    duration: 0.2,
    onComplete: () => {
      window.scroll.start()
    }
  })
}
