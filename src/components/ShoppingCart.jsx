import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'


const ShoppingCart = (props) => {
    const [cart, setCart] = useState([])
    const [uId, setUId] = useState(props.user.id)
    console.log("cart",cart)
    async function getCartItems () {
        const jwt = localStorage.getItem('token');
        let response = await axios.get(`https://localhost:44394/api/shoppingcart/${uId}`, { headers: {Authorization: 'Bearer ' + jwt}})
            .then(response => setCart(response.data))
        }

        const deleteFromCart = (item) => {
            console.log("item", item)
            const jwt = localStorage.getItem('token');
            axios.delete(`https://localhost:44394/api/shoppingcart/delete/${item}`, { headers: {Authorization: 'Bearer ' + jwt}})
            alert("Delete Successfull")
            
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
                <button fluid className="add-button" onClick={() =>deleteFromCart(item.productId)} >
                    Delete from Cart 
                </button>
            </tr>
            )} 
        </React.Fragment>

    )

}

export default ShoppingCart;