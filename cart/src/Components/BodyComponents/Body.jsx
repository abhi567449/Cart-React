import React, { useState } from 'react'
import './../../App.css'
import CartItems from './CartItems'
import phone1 from './phone-1.png'
import phone2 from './phone-2.png'
import phone3 from './phone-3.png'
import phone4 from './phone-4.png'

function Body({setCartValue,CartValue}) {

    const[totalAmount, setTotalAmount] = useState(2496);
    const[visible, setVisible] = useState(false);

    const[cart , setCart] = useState([
        {
            id : 1,
            name : "Samsung Galaxy S8",
            price : 399,
            img : phone1
        },
        {
            id : 2,
            name : "google pixel",
            price : 599,
            img : phone2
        }
        ,
        {
            id : 3,
            name : "Xiaomi Redmi Note 2",
            price : 699,
            img : phone3
        },
        {
            id : 4,
            name : "Samsung Galaxy S7",
            price : 799,
            img : phone4
        }
    ])

    const emptyCart = ()=>
    {
        setCartValue(0)
        setVisible(true)
        setCart([])
    }
   

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    
        if(cart.length===1)
        {
            setVisible(true)
        }
    };
   
  return (
    <div className='body-div'>
          
      <div className='items-div'>
      <p className='cart-heading'>Your Cart</p>
      {
        cart.map((item)=>   <CartItems key={item.id} item={item} removeItem={removeItem} setCartValue={setCartValue} CartValue={CartValue} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/> )
      }
      <hr></hr>
      <div style={{visibility:visible? "hidden":"visible"}} className='total-div'>
        <p>Total</p>
        <p>{totalAmount}</p>
      </div>
      <button style={{visibility:visible? "hidden":"visible"}}  className='clear-cart-button' onClick={()=>(emptyCart())} >Clear Cart</button>
      <p style={{visibility: visible? "visible":"hidden",marginLeft:"200px"}}>Your Cart is Empty</p>
      </div>
      
    </div>
  )
}

export default Body
