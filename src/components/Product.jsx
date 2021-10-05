import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Product = (props) => {
    console.log('Props', props.products)

    const [tempProduct, setTempProduct] = useState();
    const [scId, setScId] = useState(); 
    const [uId, setUId] = useState(props.id);
    
    const handleChange = (event, item) => {
        event.preventDefault();
        
        handleClick();
        addToCart(scId, tempProduct.productId, uId);
    }
    

    function addToCart (scId, pId, uId) 
    {
        let response = axios.post('https://localhost:44394/api/shoppingcart', props.user, scId, pId, uId)


    }

    function handleClick () 
    {
        const min = 1;
        const max = 99999;
        const rand = min + Math.floor(Math.random() * (max- min));
        setScId(rand)
      }

      
    

    return (
        <div className="products">
           {props.products.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
                <button fluid className="add-button" onClick={handleChange }>
                    Add to Cart 
                </button>
            </tr>
            )} 
        </div>
    )
}

export default Product;

