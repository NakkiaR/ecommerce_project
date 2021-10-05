import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Product = (props) => {
    console.log('Props', props.products)

    const [uId, setUId] = useState(props.user.id);
    console.log("uId", props)
    
    async function addToCart (item) 
    {
        let id = item.productId
        let info = {
            ProductId : id,
            IdentityUserId : uId
        }
        console.log("info", info)
        let response = await axios.post('https://localhost:44394/api/shoppingcart', info)
        alert({item} + "added to cart")
        console.log("response", response)

        
    }

    return (
        <div className="products">
           {props.products.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
                <button fluid className="add-button" onClick={() =>addToCart(item)} >
                    Add to Cart 
                </button>
            </tr>
            )} 
        </div>
    )
}

export default Product;

