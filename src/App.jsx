import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currencyconverter from './components/Currencyconvert'

function App() {
 
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <div className='container'>
        <Currencyconverter/> 
      </div>
      


    </div>


   
  )
}

export default App
