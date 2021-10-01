import React from 'react';

const ProductViewer = (props) => {
    console.log('review', props)
    return (
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={props.previousReview}>Previous Product</button>          
            </div>
            <div className="col-md-4">
                {props.reviews.map(item =>
                   <tr key={item.reviewId}>
                       <td>{item.name}</td>
                       <td>{item.productName}</td>
                       <td>{item.comment}</td>
                       <td>{item.rating}</td>
                   </tr> 
                    )}
            </div>
            <div className="col-md-4">
                <button onClick={props.nextReview}>Next Product</button>
            </div>
        </div>
    );
}

export default ProductViewer;