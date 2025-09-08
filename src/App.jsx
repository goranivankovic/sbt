import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Onama from './components/Onama/Onama'
import Usluge from './components/Usluge/Usluge'
import Galerija from './components/Galerija/Galerija'
import Transport from './components/Transport/Transport'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Poecetna from './components/Pocetna/Poecetna'
import Dekori from './components/Dekori/Dekori'

import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0)
   

  return (
    <>
     <Nav />
    <Poecetna />
    <Onama  />
    <Usluge />
    <Transport />
    <Contact />
    <Galerija />
    <Dekori />
  
    </>
  )
}

export default App
