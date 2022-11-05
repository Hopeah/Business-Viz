import React from "react"
import Main from "./components/Main"
import Colors from "./components/Colors"
import { useState } from 'react'
// import About from "./components/About"
// import Interests from "./components/Interests"
// import Footer from "./components/Footer"

function App() {
  const [color, setColor] = useState('')

  function changeColor(pickedColor) {
    setColor(pickedColor)
  }

    return(
      <div className={color === '' ? "container" : `container-${color}`}>
        <Colors changeColor={changeColor} />
        <Main color={color}/>
      </div>
    )
}

export default App