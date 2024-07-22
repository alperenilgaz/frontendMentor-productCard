import React, { useContext, useState } from 'react'
import './product.css'
import cake from '../../../public/assets/images/illustration-empty-cart.svg'
import Modal from 'react-modal';
import Data from '../../data.json'
import ProductItem from './ProductItem'


import { CartContext } from '../context/CartContext'
import Carbon from "../../../public/assets/images/icon-carbon-neutral.svg"
const Product = () => {
    const {cardItem,removeBasket} = useContext(CartContext)
    const totalQuantity = cardItem.reduce((acc,item) => acc+item.quantity,0)
    const totalPrice = cardItem.reduce((acc,item) =>acc+(item.price*item.quantity),0 )
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    
    const toogleClick =() => {
        setmodalIsOpen(!modalIsOpen)
    }
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
        {cardItem.length === 0 ?(
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
        ): 
            <div className="active-order">
                <div className="active-title">
                   <p>Your Cart ({totalQuantity})</p> 
                </div>
                <div className="active-orders">
                    {cardItem.map(order => (
                        <>
                        
                            <div className="order-name">
                                {order.name}
                            </div>
                            <div className="order-info">
                                <div className="amount">
                                    <p>{order.quantity}x</p>
                                </div>
                                <div className="unit-price">
                                    <p>@ ${order.price}</p>
                                </div>
                                <div className="total-price">
                                    <p>${order.price * order.quantity}</p>
                                </div>
                                <div onClick={() => removeBasket(order.id)} className="delete-btn">
                                    x
                                </div>
                           
                            </div>
                            <div className="bot-line">
                                
                            </div>
                            
                        </>
                    ))}
                </div>
                
                    <div className="total-price">
                        <p>Order Total</p>
                        <h3>${totalPrice.toFixed(2)}</h3>
                    </div>
                    <div className="carbon">
                        <img src={Carbon} alt="" />
                        <span>This is a <b>carbon-neutral</b> delivery</span>
                    </div>

                    <div className="order-button">
                        <button onClick={toogleClick}>Confirm Order</button>
                    </div>
                    
            </div>
        }
      
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={toogleClick}
   
      >
       
        <button onClick={toogleClick}>close</button>
        {/* <div className="succes-icon">
            <img src={Success} alt="" />
        </div> */}
        <div className="active-order">
                <div className="active-title">
                   <p>Your Cart ({totalQuantity})</p> 
                </div>
                <div className="active-orders">
                    {cardItem.map(order => (
                        <>
                        
                            <div className="order-name">
                                {order.name}
                            </div>
                            <div className="order-info">
                                <div className="amount">
                                    <p>{order.quantity}x</p>
                                </div>
                                <div className="unit-price">
                                    <p>@ ${order.price}</p>
                                </div>
                                <div className="total-price">
                                    <p>${order.price * order.quantity}</p>
                                </div>
                                <div onClick={() => removeBasket(order.id)} className="delete-btn">
                                    x
                                </div>
                           
                            </div>
                            <div className="bot-line">
                                
                            </div>
                            
                        </>
                    ))}
                </div>
                
                    <div className="total-price">
                        <p>Order Total</p>
                        <h3>${totalPrice.toFixed(2)}</h3>
                    </div>
                  

                    <div className="order-button">
                        <button >Start New Order</button>
                    </div>
                    
            </div>
      </Modal>
    </>
  )
}

export default Product