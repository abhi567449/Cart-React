import { useState } from 'react'
import './App.css'
import Header from './Components/HeaderComponent/Header'
import Body from './Components/BodyComponents/Body'

function App() {
  
  const [CartValue, setCartValue] = useState(4)

  return (
    <>
      <Header CartValue={CartValue}/>
      <Body setCartValue={setCartValue} CartValue={CartValue}/>
    </>
  )
}

export default App
