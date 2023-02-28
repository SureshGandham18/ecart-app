import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"
function Cart() {
  const {cartItems,subTotal,tax,shipping,total} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({
        type:'addToCart',
        payload:{id}, 
    });
    dispatch({type:"calculatePrice"});
  }
  const decrement = (id) => {
    dispatch({
        type:'decrement',
        payload:id, 
    });
    dispatch({type:"calculatePrice"});
  }
  const deleteHandler = (id) => {
    dispatch({
        type:'deleteFromCart',
        payload:id, 
    });
    dispatch({type:"calculatePrice"});
  }
  return (
    <div className='cart'>
        <main>
            {
                cartItems.length > 0 ? (
                    cartItems.map(i=>(
                        <CartItem 
                        imgSrc={i.imgSrc}
                        name={i.name}
                        price={i.price}
                        qty={i.quantity}
                        id={i.id}
                        key={i.id}
                        decrement={decrement}
                        increment={increment}
                        deleteHandler={deleteHandler}
                        />
                    ))
                ):(
                    <h1>No Items Yet!!</h1>
                )
            }
            
        </main>
        
        <aside>
            <h2>Subtotal: &#8377;{subTotal}</h2>
            <h2>Shipping: &#8377;{shipping}</h2>
            <h2>Tax: &#8377;{tax}</h2>
            <h2>Total: &#8377;{total}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,qty,decrement,increment,deleteHandler,id}) =>(
    <div className='cartItem'>
        <img src = {imgSrc} alt="Item"/>
        <article>
            <h3>{name}</h3>
            <p>&#8377;{price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>

)
export default Cart