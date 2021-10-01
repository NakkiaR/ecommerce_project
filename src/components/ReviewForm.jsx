import React, { Component } from 'react';
import axios from 'axios';


class ReviewForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          reviewId: '5',  
          name: '',
          productName: '',  
          comment: '',
          rating: 0
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
    axios.post('https://localhost:44394/api/review',this.state)
    
  }
  render() { 
    return (
      <center>
            <form onSubmit={this.handleSubmit}>
                <h2>Add A Review</h2>
                <label className="font">Your Name: </label>
                <input className="color" type="text" name="name" onChange={this.handleChange} />
                <label className="font">Product Name: </label>
                <input className="color" type="text" name="productName" onChange={this.handleChange} />
                <label className="font">Review: </label>
                <input className="color" type="text" name="comment" onChange={this.handleChange} />
                <label className="font">Rating: </label>
                <input className="color" type="number" min="1" max="5" name="rating" onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary">Add Review</button>
            </form>
            </center>
        // <form onSubmit={this.handleSubmit} >
        //     <input placeholder="Your Name" name="name" type="text" onchange={this.handleChange}/>
        //     <input placeholder="Products Name" name="productName" type="text" onchange={this.handleChange}/>
        //     <input placeholder= "New Review" name="comment" type="text" onChange={this.handleChange}/>
        //     <input placeholder="Rate 1 to 5" name="rating" type="number" min="1" max="5" onChange={this.handleChange}/>
        //     <button type='submit'>Add</button>
        // </form>
    );
  }
}
 
export default ReviewForm;