import React from "react";
import axios from "axios";
import Product from "./Product";
import Home from './Home';

<<<<<<< HEAD


=======
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
class SearchBar extends React.Component {
    state = {
        searchTerm: '',
        productSearch: []
    }
<<<<<<< HEAD
 




    
=======
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        this.searchByName()
<<<<<<< HEAD
       
          }
          
    

=======
          }
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
    async searchByName(){
        let response = await axios.get('https://localhost:44394/api/product');
        let term = this.state.searchTerm;
       var newArray = response.data.filter(function(el){
            return (el.name === term  || el.categoryId === term)
    });
        this.setState({ productSearch: newArray})
<<<<<<< HEAD

       console.log('SearchResult' , this.state.productSearch)
    
=======
       console.log('SearchResult' , this.state.productSearch)
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
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
<<<<<<< HEAD
         //<nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
             <form className="p-2 w-100 bd-highlight" onSubmit={this.handleSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                  <div className="p-2 flex-shrink-1 bd-highlight">     
                  <button className='btn btn-primary btn-sm' height='200' width='200' variant="primary" type="submit">Search</button></div>
                
             </form>  

=======
        // <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
             <form className="p-2 w-100 bd-highlight" onSubmit={this.handleSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                  <div className="p-2 flex-shrink-1 bd-highlight">
                  <button className='btn btn-dark btn-sm' height='200' width='200' variant="primary" type="submit">Search</button></div>
             </form>
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
             {this.state.productSearch.map(item =>
            <tr key={item.productId}>
                <td><h1>{item.name}</h1></td>
                <td>{item.description}</td>
                <td>${item.price}.00</td>
            </tr>
            )} 
<<<<<<< HEAD

             
=======
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
            </div>
        // </nav>          
        );
        }
    }
<<<<<<< HEAD

    export default SearchBar;




=======
    export default SearchBar;
>>>>>>> b6c6208d2c3b9bd1cba9ae08302cd4b1686b8d3e
