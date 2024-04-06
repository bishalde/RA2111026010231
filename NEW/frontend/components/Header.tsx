import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
      <section className='w-full bg-white h-[70px] shadow-md px-4 flex items-center justify-between'>
        <Link href="/">
        <img className='h-[50px]' src="/logo.png" alt="logo" />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='flex items-center p-2 border border-gray-400 h-[35px] rounded-2xl'>
            <input className='w-full h-full outline-0 px-1 text-sm' type="text" placeholder='Search' />
            <img className='hover:cursor-pointer h-[20px]' src="icons8-search-48.png" alt="Search" />
          </div>
          <img className='h-[28px] hover:cursor-pointer' src="icons8-heart-50.png" alt="wishlist" />
          <img className='h-[28px] hover:cursor-pointer' src="icons8-user-50.png" alt="wishlist" />
          <div className='relative flex items-center gap-1 border border-gray-400 px-3 py-1 rounded-3xl hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-0'>
            <h1 className='absolute top-[-10px] right-[-10px] bg-black text-white text-xs px-2 py-1 rounded-[60%]'>2</h1>
            <img className='h-[20px]' src="/icons8-cart-64.png" alt="cart" />
            <h1 className=' text-lg'>Cart</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header