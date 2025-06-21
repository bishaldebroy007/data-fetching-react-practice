// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {

  const handelButtonClickData = (props) => {
    console.log("Got the data:", props);
  };

  return (
    <div className="text-center">
      <h1 className='m-5 text-5xl font-extrabold'>List of Human Robots</h1>

      <div className='flex gap-x-10'>
        <Products handelButtonClickData={handelButtonClickData} />
        <Placement />
      </div>

    </div>
  )
}

export default App
