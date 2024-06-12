import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex shadow-inner shadow-green-900 shadow-[0px_2px_5px_5px] items-center border-x-2 border-b-2 border-black h-20 rounded-b-2xl bg-gradient-to-b from-green-500 to-green-400 px-5 justify-between'>
    <ul className='flex items-center gap-8 list-inside list-none'>
        <li><a href="/"><h1 className='text-3xl'><b>Text Utils</b></h1></a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">About</a></li>
    </ul>
    <ul>
        <li><a href="/">Nothing here</a></li>
    </ul>
    </nav>
  )
}
