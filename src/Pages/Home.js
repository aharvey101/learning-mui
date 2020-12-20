import React from 'react'
import Navbar from '../Components/Nav'
import Map from '../Components/Map'
import SidebarLeft from '../Components/Sidebar'
import SidebarRight from '../Components/SidebarRight'
import BottomBar from '../Components/BottomBar'
import './homeStyles.css'

function Home() {
  return (
    <>
      <div className="iContain">
        <Navbar />
        <SidebarLeft />
        <Map />
        <BottomBar />
        <SidebarRight />
      </div>
    </>
  )
}

export default Home
