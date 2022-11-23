import React from "react"
import Main from "./components/Main"
import Colors from "./components/Colors"
import { useState } from 'react'
// import About from "./components/About"
// import Interests from "./components/Interests"
// import Footer from "./components/Footer"

function App() {
  const [color, setColor] = useState('')

    return(
      <div className={color === '' ? "container" : `container-${color}`}>
        <Colors changeColor={setColor} />
        <Main color={color}/>
      </div>
    )
}

export default App