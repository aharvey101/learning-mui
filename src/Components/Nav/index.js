import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Nav = (state) => {
  const style = {
    title: {
      paddingLeft: 30,
      color: 'white',
    },
  }
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand style={{ paddingRight: 0 }} href="#home">
          <div style={style.title}>Architect App </div>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}
export default Nav
