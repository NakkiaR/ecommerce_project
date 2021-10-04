import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function ShoppingCart() {
    const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

    const [cart, setCart] = useState()

    useEffect(() => {
        commerce.cart.retrieve()
        .then(res => {
            setCart(res)
        })
    },[])

    const addToCart = (productId) => {
        commerce.cart.add(productId, 1)
        .then(res => {
            setCart(res.cart)
        })
    }

    return (
        <div className="ShoppingCart">
            <Nav cart={cart} emptyCart={emptyCart}/>
            <div centered stackable padded relaxed>
                <div className="left-column" width={5}>
                
                </div>
                <div width={9}>
                    <ProductContainer
                        addToCart={addToCart}
                    />    
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;