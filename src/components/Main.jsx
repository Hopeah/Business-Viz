import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Main(props) {
  //pink, blue, red, gray, black

    return(
      <main className={props.color === '' ? "" : `main-${props.color}`}>
        <Info color={props.color} />
        <About color={props.color} />
        <Interests color={props.color} />
        <Footer color={props.color} />
      </main>
    )
}

export default Main