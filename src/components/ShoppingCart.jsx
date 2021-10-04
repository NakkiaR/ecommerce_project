import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'


const ShoppingCart = (props) => {
    const [cart, setCart] = useState([])
    const [uId, setUId] = useState(props.user.id)

    async function getCartItems () {
        const jwt = localStorage.getItem('token');
        let response = await axios.get(`https://localhost:44394/api/shoppingcart/${uId}`, { headers: {Authorization: 'Bearer ' + jwt}})
            .then(response => setCart(response.data))
        }
        
        useEffect(() => {
            
            getCartItems();
        },[])


    return (
        <React.Fragment>
            {cart.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>${item.price}.00</td>
            </tr>
            )} 
        </React.Fragment>

    )

}

export default ShoppingCart;