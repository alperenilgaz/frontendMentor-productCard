import React from 'react'
import './product.css'
import cake from '../../../public/assets/images/illustration-empty-cart.svg'
import Data from '../../data.json'
import ProductItem from './ProductItem'
const Product = () => {
  return (
    <>
    <div className="wrapper-content">

        <div className="container">
            <div className="container-title">
                <p>Desserts</p>
                </div>
                <div className="product">
                    {
                        Data.map(item => (
                            <ProductItem item ={item} key={item.name}/>
                        ))
                    }
                </div>
           
        </div>
        <div className="order-card">
            <div className="card-title">
                <p>Your Cart(0)</p>
            </div>
            <div className="image">
                <img src={cake} alt="" />
            </div>
            <div className="desc">
                <p>Your added items will appear here</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product