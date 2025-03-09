import React from 'react'
import NavBar from '../modules/NavBar';
import ResponsiveGrid from '../modules/ResponsiveGrid';
import MobileLayout from './components/MobileLayout';
import DesktopLayout from './components/DesktopLayout';

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <ResponsiveGrid>
        <MobileLayout />
        <DesktopLayout />
      </ResponsiveGrid>
    </div> 
  )
}

