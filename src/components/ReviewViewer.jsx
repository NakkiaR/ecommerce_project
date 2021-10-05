import React from 'react';

const ReviewViewer = (props) => {
    console.log('review', props)
    return (
       


            <div className="container" >
                <h3> Reviews </h3>
                {props.reviews.map(item =>
                   <th className="card-body" key={item.reviewId}>
                       <p className="card-text">{item.productName}</p>
                       <h4 className="card-text">{item.comment}</h4>
                       <p className="card-text text-dark">-{item.name}</p>
                       <h4>{item.rating} STARS</h4>
                       <hr/>
                   </th> 
                    )}
            </div>


           
         
    );
}

export default ReviewViewer;