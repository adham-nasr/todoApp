import React from 'react'
import NavBar from './NavBar'
import './SiteLayout.css'
function SiteLayout({children}) {
  return (
    <>
        <NavBar />
        <main>
            {children}
        </main>
    </>
  )
}

export default SiteLayout