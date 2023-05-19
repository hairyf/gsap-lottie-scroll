import lottie from 'lottie-web'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "./style.css"

gsap.registerPlugin(ScrollTrigger)

const animation = lottie.loadAnimation({
  container: document.querySelector('.content')!,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/data.json'
})

function update(progress: number) {
  animation.goToAndStop(animation.totalFrames * progress, true);
}

ScrollTrigger.create({
  trigger: '#app',
  start: 'top top',
  end: 'bottom top',
  pin: true,
  onUpdate: (self) => update(self.progress)
})
