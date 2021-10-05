import React from "react";
import axios from "axios";
import Product from "./Product";
import Home from './Home';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
        productSearch: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        this.searchByName()
          }
    async searchByName(){
        let response = await axios.get('https://localhost:44394/api/product');
        let term = this.state.searchTerm;
       var newArray = response.data.filter(function(el){
            return (el.name === term  || el.categoryId === term)
    });
        this.setState({ productSearch: newArray})
       console.log('SearchResult' , this.state.productSearch)
     }
    // search = async value => {
    //     this.setState({ loading: true });
    //     // const results = await search(
    //     const results = await axios(
    //       'https://localhost:44394/api/product'
    //     );
    // }
    render(){
        return(
        // <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
             <form className="p-2 w-100 bd-highlight" onSubmit={this.handleSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                  <div className="p-2 flex-shrink-1 bd-highlight">
                  <button className='btn btn-dark btn-sm' height='200' width='200' variant="primary" type="submit">Search</button></div>
             </form>
             {this.state.productSearch.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
            </tr>
            )} 
            </div>
        // </nav>          
        );
        }
    }
    export default SearchBar;