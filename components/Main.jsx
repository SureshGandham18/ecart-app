import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div className='main'>
    <Link to={'/home'}>Shop Now</Link>
    </div>
  )
}

export default Main
