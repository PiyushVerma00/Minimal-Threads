import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import {motion} from 'motion/react'

function ProductItem({id,image,name,price,}) {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='cursor-pointer text-[#595959]' to={`/product/${id}` }>
    <div className='overflow-hidden'>
        <motion.img
        initial={{scale:1.1}}
        whileHover={{scale:1, transition:{type:"spring" , stiffness:80, damping:30}}}
        whileTap={{scale:0.98}}
      loading="eager"
        
        src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem