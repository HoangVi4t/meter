import { NavLink } from '../common/Links'
import React, { useState } from 'react'
import clsx from 'clsx'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div
        onClick={handleToggle}
        className={clsx('block cursor-pointer border px-3 py-2 lg:hidden')}
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>
      <div
        className={clsx(
          'h-max-content border-r-1 absolute w-screen bg-[#1d3156] shadow transition-all duration-300 ease-in-out lg:relative lg:block lg:max-w-[15vw] lg:translate-x-0 lg:border-gray-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <nav onClick={handleToggle} className={clsx('flex h-full flex-col')}>
          <h1 className='text-white font-bold mb-5 pt-5 pl-[30px]'>ICONICS</h1>
          <div style={{ borderBottom: '1px solid white', padding: 20 }}>
            <NestedMenu title='Electricity'>
              <NavLink href={'/electricity/meter1'}>Meter 1</NavLink>
              <NavLink href={'/'}>Meter 2</NavLink>
              <NavLink href={'/'}>Meter 3</NavLink>
              <NavLink href={'/'}>Meter 4</NavLink>
            </NestedMenu>
            <div className='mt-5 ml-2.5'>
              <NavLink href='/' className='text-white select-none'>
                <div className='flex items-center gap-2.5'>
                  <i className='fa-regular fa-bell'></i>
                  <p>Notification</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className='px-5'>
            <div className='ml-2.5'>
              <NavLink href='/' className='text-white select-none'>
                <div className='flex items-center gap-2.5'>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <p>Logout</p>
                </div>
              </NavLink>
            </div>
            <div className='ml-2.5'>
              <NavLink href='/' className='text-white select-none'>
                <div className='flex items-center gap-2.5'>
                  <i className='fa-solid fa-question'></i>
                  <p>Help</p>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

const NestedMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className='relative'>
      <div onClick={handleToggle} className='flex items-center gap-2.5 cursor-pointer text-white select-none ml-2.5'>
        <i className='fa-solid fa-bolt'></i>
        {title}
        <svg
          className={clsx('ml-1 w-4 h-6', isOpen && 'transform rotate-180')}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className={clsx('ml-4 mt-2', isOpen ? 'flex flex-col' : 'hidden')}>
        {children}
      </div>
    </div>
  )
}

export default Sidebar
