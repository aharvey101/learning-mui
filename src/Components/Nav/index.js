import React from 'react'

const Nav = (state) => {
  const style = {
    border: '10px red',
    title: {
      paddingLeft: 30,
      color: 'white',
    },
    navbar: {
      height: '4rem',
      gridArea: 'nav',
      backgroundColor: '#B6D5D7',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      paddingLeft: 20,
    },
  }
  return (
    <>
      <div style={style.navbar}>
        <div style={style.title}>Architect App</div>
      </div>
    </>
  )
}
export default Nav
