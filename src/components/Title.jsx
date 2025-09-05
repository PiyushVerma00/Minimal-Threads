import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Title({text1,text2}) {
    const {products} = useContext(ShopContext)
    
   
    
  return (
    <div className='inline-flex gap-1.5 sm:gap-2 items-center mb-3'>
        <p className='text-[#595959]'>{text1} <span className='font-semibold text-[#9C2605]'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#595959]'></p>

    </div>
    
  )
}

export default Title