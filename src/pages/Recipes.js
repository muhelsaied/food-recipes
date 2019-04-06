import React, { Component } from 'react';
import Search from '../compenets/search/search'
import RecipesList from '../compenets/search/recipesList'
import { recipeData } from '../data/tempList'
import Default from '../pages/Default'
class Recipes extends Component {
    constructor(props){
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }
    state={
      recipes : recipeData,
      search: '',
      //default search  out put
      url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      //get value fro stae and setting up search
      base_url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      query:'&q=',
      error:''
    };

    async getRecipes(){
        try{
            const data = await fetch(this.state.url);
            //run with json
            const jsonData = await data.json();
            // console.log(jsonData)
            if(jsonData.recipes.length === 0 ){
                this.setState({
                    error: ' can not fount uer recipe , please try to valid you input  '
                })
            }
            else{
                this.setState({
                    recipes: jsonData.recipes,
                    error:''
                    })
                }
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
    const { base_url, query, search } = this.props;
    this.setState({
        url:`${base_url}${query}${search}`,
        search:''
    },()=>this.getRecipes())
}
    render() {
        return (
            <div>
                <Search 
                    search={this.state.search} 
                    handlechange={this.handlechange} 
                    handleSubmit={this.handleSubmit}/>
                {this.state.error?(<Default/>):(<RecipesList recipes= {this.state.recipes}/>)}
            </div>
        );
    }
}



export default Recipes;