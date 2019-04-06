import React, { Component } from 'react';
import Search from '../compenets/search/search'
import RecipesList from '../compenets/search/recipesList'
import { recipeData } from '../data/tempList'

class Recipes extends Component {
    // constructor(props){
    //     super(props);
    // }
    state={
      recipes : recipeData,
      search: ''
    }
// change input in search 
handlechange = e =>{
    this.setState({
        search: e.target.value
    })
}
//submit serach form
handleSubmit = e => {
    e.preventDefault();
}
    render() {
        return (
            <div>
                <Search search={this.state.search} handlechange={this.handlechange} handleSubmit={this.handleSubmit}/>
                <RecipesList recipes= {this.state.recipes}/>
            </div>
        );
    }
}



export default Recipes;