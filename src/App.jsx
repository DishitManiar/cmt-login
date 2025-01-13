import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Loginpage from './components/loginfile/loginpage';

function App() {
  const [count, setCount] = useState(0)
  console.log("Hello")

  return (
    <div>
   
     <Loginpage/>
    </div>
  )
}

export default App
