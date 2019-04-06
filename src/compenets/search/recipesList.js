import React, { Component } from 'react';
import Recipes from './recipes'

class RecipesList extends Component {
    render() {
        return (
            <div>
                RecipesList
                <Recipes/>
            </div>
        );
    }
}

export default RecipesList;