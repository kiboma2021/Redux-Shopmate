import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add,remove } from "../store/cartSlice";

import "./ProductCard.css";


export const ProductCard = ({product}) => {

  const dispatch = useDispatch();
  const [inCart, setInCart]=useState(false);
  const {id, name, price, image} = product;
  const cartList = useSelector(state => state.cartState.cartList);

  useEffect(() =>{
    const isInCart = cartList.find(item => item.id === id)
    if (isInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  },[cartList,id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { inCart? (
          <button onClick={()=>dispatch(remove(product))} style={{backgroundColor: 'red' }} >Remove</button>
        ):(
          <button onClick={()=>dispatch(add(product))} >Add To Cart</button>
        )}
        
      </div>
    </div>
  )
}
