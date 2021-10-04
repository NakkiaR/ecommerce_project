import React, { Component } from 'react';
import axios from 'axios';
class CreateProduct extends Component {
  constructor(props) {
      super(props);
      this.state = {
          productId: '',
          productName: '',  
          description: '',
          price: '',
          categoryId: ''
        }
  }
  handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("post",this.state)
    axios.post('https://localhost:44394/api/product',this.state) 
  }
    
  handleClick (){
    const min = 1;
    const max = 99999;
    const rand = min + Math.floor(Math.random() * (max- min));
    this.setState({ productId: this.state.productId + rand})
  }
  

  render() { 
    return (
      <center>
            <form onSubmit={this.handleSubmit}>
                <h2>Add A Product</h2>
                <label className="font">Product Name: </label>
                <input className="color" type="text" name="productName" onChange={this.handleChange} />
                <label className="font">Description: </label>
                <input className="color" type="text" name="description" onChange={this.handleChange} />
                <label className="font">Price: </label>
                <input className="color" type="text" name="price" onChange={this.handleChange} />
                <div>
                    <label>Category</label>
                <select id="dropdown" name="categoryId" onChange={this.handleChange}>
                    <option value="1">Zodiac</option>
                    <option value="2">Traditional Star</option>
                    <option value="3">Double Star</option>
                </select>
                </div>        
                {/* <label className="font">Rating: </label>
                <input className="color" type="number" min="1" max="5" name="rating" onChange={this.handleChange} /> */}
                <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Add Product</button>
            </form>
            </center>
     
    );
  }
}
 
export default CreateProduct;