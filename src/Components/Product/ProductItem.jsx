import React from 'react'
import './productItem.css'
import basket from "../../../public/assets/images/icon-add-to-cart.svg"
const ProductItem = ({item}) => {
console.log(item.image.desktop);
  return (
    <>
            <div className="product-card">
             
                <div className="item-image">
                    <img src={item.image.desktop} alt="" />
                </div>
                <div className="card-button">
                  <button>
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