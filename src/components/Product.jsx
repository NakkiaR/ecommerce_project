import React from 'react';

const Product = (props) => {
    console.log('Props', props.products)
    return (
        <div>
           {props.products.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
            </tr>
            )} 
        </div>
    )
}

export default Product;

