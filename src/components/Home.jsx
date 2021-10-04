import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import ReviewForm from './ReviewForm';
import ReviewViewer from './ReviewViewer';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            reviews: [],
            product: []
         }
    }

    

    componentDidMount() {
        this.getAllProducts();
        this.getAllReviews();
        this.getSpecificProduct();
        
    }

    async getAllProducts() {
        let response = await axios.get('https://localhost:44394/api/product');
        this.setState({
            products: response.data
        });
        console.log('products',response.data)
    }

    async getSpecificProduct() {
        let response = await axios.get('https://localhost:44394/api/product/1/product');
        this.setState({
            product: response.data
        })
    }

    async getAllReviews() {
        let response = await axios.get('https://localhost:44394/api/review');
        this.setState({
            reviews: response.data
        });
    }


    render() { 
        if (this.state.products === [] && this.state.reviews === []) {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                </React.Fragment>
            )
        } else {
        return ( 
            <React.Fragment>
                <div>Hello World!</div> 
                {/* <NavBar /> */}
                <Product products={this.state.products} />
                <ReviewForm />
                <ReviewViewer reviews={this.state.reviews}/>
            </React.Fragment>
         );
    }
}
}
 
export default Home;