import React, { Component } from 'react';
import Recipes from './recipes'

class RecipesList extends Component {
    render() {
        const { recipes } = this.props;
        return (
            <div className='container py-5'>
            {/* title */}
                <div className='row'>
                    <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                        <h1 className='text-slanted'> List</h1>
                    </div>
                </div>
                <div className='row'>
                    {/* adding single recipe  as jsx */}
                    {recipes.map(recipe => (<Recipes key = {recipe.recipe_id} recipe = {recipe}/> ))}
                </div>
            </div>
        );
    }
}

export default RecipesList;
