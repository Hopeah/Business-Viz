import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Main(props) {
  //pink, blue, red, gray, black

  const { color } = props

  return(
    <main className={color ? `main-${props.color}` : ""}>
      <Info color={color} />
      <About color={color} />
      <Interests color={color} />
      <Footer color={color} />
    </main>
  )
}

export default Main