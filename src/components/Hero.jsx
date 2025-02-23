import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg'>New and used Cybertrucks available for sale</h2>
            <h2 className='text-[60px] font-bold'>Purchase your Cybertruck</h2>
            <Search />

            <img src="/tesla.png" alt="" className='mt-10' />
        </div>
    </div>
  )
}

export default Hero