import { ReactP5Wrapper } from '@p5-wrapper/react'

const Plane = () => {
  const sketch = (p5) => {
    p5.setup = () => p5.createCanvas(900, 600, p5.WEBGL)
    p5.draw = () => {
      p5.background(0)
      p5.normalMaterial()
      p5.push()
      p5.rotateZ(p5.frameCount * 0.01)
      p5.rotateX(p5.frameCount * 0.01)
      p5.rotateY(p5.frameCount * 0.01)
      p5.plane(500)
      p5.pop()
    }
  }

  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  )
}

export default Plane
