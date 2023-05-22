import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/test'}>Test</NavLink>
      <NavLink to={'/product'}>Productssss</NavLink>
    </div>
  )
}

export default Header
