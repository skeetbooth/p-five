import { ReactP5Wrapper } from '@p5-wrapper/react'
const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight * 0.8

const Tree = () => {
  const sketch = (p5) => {
    let angle, hue
    const branch = (len, x, y) => {
      p5.strokeWeight(len / 10)
      p5.line(0, 0, 0, -len)
      p5.translate(0, -len)
      if (len > 4) {
        p5.push()
        p5.rotate(angle)
        branch(len * 0.67, x, y)
        p5.pop()
        p5.push()
        p5.rotate(-angle)
        branch(len * 0.67, x, y)
        p5.pop()
      }
    }

    p5.setup = () => p5.createCanvas(viewportWidth, viewportHeight, p5.WEBGL)
    p5.draw = () => {
      p5.background(0, 0, 0)
      angle = p5.random(0.2, 0.7)
      hue = p5.random(90, 190) //
      p5.stroke(hue, 100, 50)
      branch(
        viewportWidth / 7,
        viewportWidth / 2,
        viewportWidth - (2 * viewportWidth) / 10
      )
    }
  }

  return <ReactP5Wrapper sketch={sketch} />
}

export default Tree
