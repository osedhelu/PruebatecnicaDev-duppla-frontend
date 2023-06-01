'use client'
import Link from 'next/link'
import React from 'react'
const _links = [
  { name: 'home', route: '/' },
  { name: 'about', route: '/about' }
]
export const Navigation = () => {
  return (
    <header>
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white font-bold'>Logo de la empresa</div>
          <div className='flex items-center space-x-4'>
            {_links.map((e, index) => (
              <Link key={index} href={e.route}> {e.name}</Link>
            ))}
            <a href='#' className='text-white hover:text-gray-300'>
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
