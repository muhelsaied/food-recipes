import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipes extends Component {
    render() {
        const { publisher, title, source_url, image_url, recipe_id } = this.props.recipe;
        return (
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                <div className="card shadow rounded" style={{height:'100%'}} >
                    <img 
                        src={image_url} 
                        style={{height:'14rem'}}
                        className="card-img-top"
                        alt={title}/>
                    <div className="card-body text-capitalize text-awesome span">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="text-pruple">provided by : {publisher}</h6>
                    </div>
                    <div className="card-footer">
                       <Link 
                        to={`/recipes/${recipe_id}`}
                        className="btn btn-danger text-capitalize mx-2">
                        details
                       </Link>
                       <a 
                        href = {source_url} 
                        className="btn btn-warning text-capitalize mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        >source page</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipes;
