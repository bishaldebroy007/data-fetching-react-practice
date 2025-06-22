// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { useState } from 'react'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'
import SpecialButton from './components/SpecialButton/SpecialButton'

function App() {
  const [cart, setCart] = useState([]);


  const handelButtonClickData = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
    alert(`You have added ${props.name} to the cart!`);
  };
  // Now the cart will hold all the data, which can be sent.

  return (
    <div className="text-center">
      <h1 className='m-5 text-5xl font-extrabold'>List of Human Robots</h1>

      <div className='flex gap-x-10'>
        <Products handelButtonClickData={handelButtonClickData} />
        <Placement cart={cart} />
      </div>
      <SpecialButton className="m-9" />
    </div>
  )
}

export default App
