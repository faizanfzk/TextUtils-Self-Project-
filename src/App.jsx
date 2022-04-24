import { useState } from 'react'


import { Navbar } from './components/Navbar'
import { TextForm } from './components/Form'
import {Footer} from   "./components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Navbar name="TextUtils" />
   <TextForm name="Enter the text to analyze below"/>
   <Footer/>
    </div>
  )
}

export default App
