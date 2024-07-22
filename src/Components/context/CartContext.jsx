import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cardItem, setCardItem] = useState(localStorage.getItem("CardItem") ? JSON.parse(localStorage.getItem("CardItem")) : []);
    const [modalIsOpen, setModalIsOpen] = useState(false)


    useEffect(() => {
        localStorage.setItem("CardItem", JSON.stringify(cardItem));
    }, [cardItem]);

    console.log(cardItem);

    const addBasket = (item) => {
        const existingItem = cardItem.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCardItem(prevCart => 
                prevCart.map(prevItem => 
                    prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
                )
            );
        } else {
            setCardItem(prevCart => [
                ...prevCart,
                {
                    ...item,
                    quantity: 1
                }
            ]);
        }
    };

    const removeBasket = (itemId) => {
        const filteredItems = cardItem.filter((item) => {
            return item.id !== itemId
        })
        setCardItem(filteredItems)
    }

   
    return (
        <CartContext.Provider value={{
            addBasket,
            removeBasket,
            cardItem,
            setCardItem,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
