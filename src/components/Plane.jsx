import { ReactP5Wrapper } from '@p5-wrapper/react'
const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight * 0.8

const Plane = () => {
  const sketch = (p5) => {
    p5.setup = () => p5.createCanvas(viewportWidth, viewportHeight, p5.WEBGL)
    p5.draw = () => {
      p5.background(44)
      p5.normalMaterial()
      p5.push()
      p5.rotateZ(p5.frameCount * 0.01)
      // p5.rotateX(p5.frameCount * 0.01)
      // p5.rotateY(p5.frameCount * 0.01)
      p5.plane(500)
      p5.pop()
    }
  }

  return <ReactP5Wrapper sketch={sketch} />
}

export default Plane
