import React, { Component } from 'react';
import Search from '../compenets/search/search'
import RecipesList from '../compenets/search/recipesList'
import { recipeData } from '../data/tempList'

class Recipes extends Component {
    constructor(props){
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }
    state={
      recipes : recipeData,
      search: '',
      url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`
    };

    async getRecipes(){
        try{
            const data = await fetch(this.state.url);
            //run with json
            const jsonData = await data.json();
            // console.log(jsonData)
            this.setState({
                recipes: jsonData.recipes
            })
        }
        catch(error){
            console(error)
        }
    }
    componentDidMount(){
        this.getRecipes();
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