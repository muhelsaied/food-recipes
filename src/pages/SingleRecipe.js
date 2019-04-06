import React, { Component } from 'react';
import { recipeData } from '../data/tempDetails'
import { Link } from 'react-router-dom'
import load from '../images/circles.svg'
class SingleRecipe extends Component {
    constructor(props){
        super(props);
        const id = this.props.match.params.id;
        // console.log(id);
        this.state={
            recipe : recipeData,
            id,
            loading:false,
            ingradents:''
        }
    }
    
    render() {
        //destructe recipe data 
        const  { publisher, publisher_url, source_url, title, image_url, ingredients }= this.state.recipe;
            if(this.state.loading){
                return(
                 <div className='container mt-5'>
                     <div className="row">
                         <div className='col-10 mx-auto col-md-6 my-3'>
                             <h1 className="text-uppercase my-5 text-pruple text-awesome text-center">
                                 loading recipe 
                             </h1>
                         </div>
                     </div>
                     <div className="row">
                         <div className='col-10 mx-auto col-md-6 my-3'>
                             <img className="text-uppercase my-5 text-pruple text-awesome align-middle bg-danger rounded mx-auto d-block"
                             src={load} alt='load'/>
                         </div>
                     </div>
                 </div>
                )
            }
            return(
                <div className='container mt-5'>
                    <div className="row">
                    {/* img col */}
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <Link 
                                to='/recipes'
                                className='btn btn-warning text-capitalize mb-5'>
                                back to recipes
                            </Link>
                            <img 
                                src={image_url}
                                className='rounded d-block w-100'
                                style={{maxHeight:'30rem'}}
                                alt={title}
                            />
                        </div>
                        {/* info col */}
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <h1 className="text-uppercase my-5 text-pruple text-awesome text-center">
                                {title} 
                            </h1>
                            <h3 className="text-uppercase my-5 span text-awesome text-center">
                                provided by {publisher} 
                            </h3>
                            <a 
                                href = {source_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn btn-success text-capitalize mt-3 mx-2'>
                                    source webpage
                            </a>
                            <a 
                                href = {publisher_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn btn-danger text-capitalize mt-3 mx-2 '>
                                    publisher webpage
                            </a>
                            <ul className='list-group mt-4'>
                                <h2 className='mt-5 mb-5 text-uppercase text-pruple  text-center'>
                                ingradents
                                </h2>
                                {
                                    ingredients.map((item,index )=>{
                                        return(
                                            <li 
                                                key = {index}
                                                className='list-group-item '>
                                                {item}
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            )
       }
    }


export default SingleRecipe;