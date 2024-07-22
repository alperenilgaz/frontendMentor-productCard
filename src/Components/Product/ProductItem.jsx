import React, { useContext } from 'react'
import './productItem.css'
import basket from "../../../public/assets/images/icon-add-to-cart.svg"

import { CartContext } from '../context/CartContext'
const ProductItem = ({item}) => {
  const {addBasket} = useContext(CartContext)
  return (
    <>
            <div className="product-card">

                <div className="item-image">
                    <img src={item.image.desktop} alt="" />
                </div>
                <div className="card-button">
                  <button onClick={() => addBasket(item)} >
                    <img src={basket} alt="" />
                    Add to Card</button>
                </div>
                
                <div className="item-category">
                  <p>{item.category}</p>
                </div>
                <div className="item-name">
                  <h3>{item.name}</h3>
                </div>
                <div className="item-price">
                  <p>${item.price.toFixed(2)}</p>
                </div>
               

        </div>
    </>
  )
}

export default ProductItem