import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = (props) => {
    console.log('Props', props.products)

    const [tempProduct, setTempProduct] = useState();
    const [scId, setScId] = useState(); 
    const [uId, setUId] = useState(props.identityUserId);
    

    handleChange = (event) => {
        event.preventDefault();
        setTempProduct(item);
        handleClick();
        props.addToCart(scId, tempProduct.productId, uId);
    }

    addToCart (scId, pId, uId) {
        let response = axios.post('https://localhost:44394/api/shoppingcart', scId, pId, uId)


    }

    handleClick () {
        const min = 1;
        const max = 99999;
        const rand = min + Math.floor(Math.random() * (max- min));
        setScId(rand)
      }
    

    return (
        <div>
           {props.products.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
                <button fluid className="add-button" onClick={handleChange}>
                    Add to Cart 
                </button>
            </tr>
            )} 
        </div>
    )
}

export default Product;

