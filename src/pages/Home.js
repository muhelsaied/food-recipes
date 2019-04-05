import React, { Component } from 'react';
import Main from '../compenets/main'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Main title='Find Amazing Recipes'>
                <Link to='recipes' className="text-uppercase btn btn-danger btn-lg mt-3">
                    search recipes
                </Link>
                </Main>
            </div>
        );
    }
}

export default Home;