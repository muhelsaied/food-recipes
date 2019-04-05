import React, { Component } from 'react';
import './App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import SingleRecipe from './pages/SingleRecipe'
import Home from './pages/Home'
import Default from './pages/Default'
import Recipes from './pages/Recipes'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './compenets/navbar'
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <NavBar/>
            <main>
              {/* nav bar */}
              <Switch>
                {/* switch change section */}
                <Route path='/' exact component={Home}/> 
                <Route path='/Recipes/' exact component={Recipes}/>
                <Route path='/Recipes/:id' component={SingleRecipe}/>
                <Route component={Default}/>
              </Switch>
            </main>
          </div>
      </Router>
    );
  }
}

export default App;