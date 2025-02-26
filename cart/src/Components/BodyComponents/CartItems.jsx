import React, { useEffect, useState } from 'react'
import uparrow from './uparrows.png'
import dwnarrow from './arrows.png'

function CartItems({item,removeItem,setCartValue,CartValue,setTotalAmount,totalAmount}) {

    const[total,setTotal] = useState(1);
  
    
    function increase(total)
    {
        console.log(CartValue)
      
        setTotalAmount(totalAmount+price)
        
        total = total+1;
        setCartValue(CartValue+1)
        console.log(CartValue)
        return total
    }

    function decrease(total)
    {
        setTotalAmount(totalAmount-price)
        total = total-1;
        setCartValue(CartValue-1)
        return total
    }

    
    useEffect(()=>
    {
        if(total==0)
        {
            removeItem(id)
        }
    },[total,removeItem,item.id])
    let { id, name, price, img } = item;
  return (
    <div className='cart-items'>
        <div>
            <img className='item-img' src={img} ></img>
            
        </div>
        <div className='details-items'>
            <p>{name}</p>
            <p>$ {price}</p>
            <button className='button-remove' onClick={() => removeItem(id)}>remove</button>
        </div>
        <div>
            <img className='arrow' src={uparrow} onClick={() => setTotal(increase(total))}/>
            <p>{total} </p>
            <img className='arrow' src={dwnarrow} onClick={() => setTotal(decrease(total))}/>
        </div>
    </div>
  )
}

export default CartItems
