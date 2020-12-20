import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Sidebar() {
  const style = {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#B6D5D7',
    marginRight: 10,
    h1: {
      color: 'red',
    },
    links: {
      textDecoration: 'none',
      listStyle: 'none',
      link: {
        fontSize: 16,
        padding: 10,
      },
    },
  }
  return (
    <>
      <div style={style}>
        <ul style={style.links}>
          <li style={style.links.link}>This is a link</li>
          <li style={style.links.link}>This is a link</li>
          <li style={style.links.link}>This is a link</li>
          <li style={style.links.link}>This is a link</li>
          <li style={style.links.link}>This is a link</li>
        </ul>
      </div>
    </>
  )
}
