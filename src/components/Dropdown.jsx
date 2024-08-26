import React from 'react'
import { IoStarOutline } from "react-icons/io5"

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    favourites,
    handleFavourites,
    title ="",


}) => {
  return (
    <div>
        <label htmlFor={title}
        className='block text-sm font-medium text-gray-700'
        >
            {title}
            </label>
        <div className='mt-1 relative'>
            <select  value ={currency} onChange={(e)=>setCurrency(e.target.value)}className='w-full p-2 border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'> 
              {favourites.map((currency)=>{
                return(
                    <option className='bg-gray-200' value={currency} key={currency}>
                        {currency}
                    </option>   // selected currency is included in the favourites list
                )
              })}
              
               <hr />
                {currencies?.map((currency)=>{
                    return(
                    <option value={currency} key={currency}>
                        {currency}
                    </option> )
                })}
           

            </select>
            <button onClick={()=>handleFavourites(currency)}
            className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'
            >
                <IoStarOutline/>
            </button>
        </div>
    </div>
   
  )
}

export default CurrencyDropdown