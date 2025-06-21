// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className='m-5 text-5xl font-extrabold'>List of Human Robots</h1>
      <div className=''>
        <Products />
        <Placement />
      </div>

    </div>
  )
}

export default App
