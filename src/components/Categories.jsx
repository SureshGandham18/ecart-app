import React from 'react'
import {Link} from 'react-router-dom';
import {GiClothes} from 'react-icons/gi';
import {GiLaptop} from 'react-icons/gi';
import {ImMobile2} from 'react-icons/im';
import {BsFillHouseFill} from 'react-icons/bs';
import {GiSlippers} from 'react-icons/gi';
// import {RiLuggageCartLine} from 'react-icons/ri';
function Categories() {
  return (
    <cat>
        {/* <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'../'}><RiLuggageCartLine size={45}/><p>All</p></Link> */}
        <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'./clothes'}>&nbsp;&nbsp;<GiClothes size={45}/><p>Clothes</p></Link>
        <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'./laptops'}>&nbsp;&nbsp;&nbsp;<GiLaptop size={45}/><p>Laptops</p></Link>
        <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'./mobiles'}>&nbsp;&nbsp;&nbsp;<ImMobile2 size={45}/><p>Mobiles</p></Link>
        <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'./'}>&nbsp;&nbsp;&nbsp;<BsFillHouseFill size={45}/><p>Funiture</p></Link>
        <Link style={{color:'black',fontWeight:'normal',fontSize:'22px'}} to={'./'}>&nbsp;&nbsp;&nbsp;&nbsp;<GiSlippers size={45}/><p>Footwear</p></Link>
    </cat>
  )
}

export default Categories