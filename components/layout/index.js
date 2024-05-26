import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Sidebar from './Sidebar'

const Layout = ({ meta, children, ...props }) => {
  const router = useRouter()
  return (
    <div className="max-w-screen min-h-screen lg:flex">
      <Meta {...meta} />
      <Sidebar />
      <div className="mx-auto flex w-[100%] ">
        <main className="flex-1" {...props}>
          {children}
        </main>
        {router.pathname === '/' && <Footer />}
      </div>
    </div>
  )
}

export default Layout
