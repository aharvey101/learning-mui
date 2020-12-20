import React from 'react'

const SidebarRight = (params) => {
  const style = {
    backgroundColor: '#B6D5D7',
    minHeight: '100%',
    marginRight: 0,
    paddingRight: 0,

    h1: {
      padding: 10,
      fontSize: 20,
    },
  }
  return (
    <div style={style}>
      <div style={style.h1}>Right Sidebar</div>
    </div>
  )
}

export default SidebarRight
