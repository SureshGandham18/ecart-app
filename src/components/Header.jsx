import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import { useSelector } from 'react-redux'

function Header() {
  const {cartItems} = useSelector(state=>state.cart);
  return (
    <nav>
        <img src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000"/>
        <div>           
          <Link to={'/'}><t><AiOutlineHome/></t>Home</Link>
          <Link to={'/cart'}>
              <FiShoppingBag/>
              <p>{cartItems.length}</p>
          </Link>          
        </div>
    </nav>
  )
}

export default Header