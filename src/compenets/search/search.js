import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search, handlechange , handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className='text-awesome text-capitalize span'>
                            Find Your recipe ! 
                            <br/>
                            have you dinner ready
                            <br/>
                            <strong className='text-pruple text-slanted'>
                                food<span className='span'>2</span>fork
                            </strong>
                        </h1>
                        <form className='mt-3 align-middle'>
                            <label htmlFor='search' className='text-capitalize text-awesome span'>
                                find your recipe '<strong>sperate your content with comma</strong>'
                            </label>
                            <div className='input-group m-auto'>
                                <input
                                className='form-control'
                                type="search" 
                                placeholder="caraot ,onoin,meat" 
                                name="Search"
                                value= {search}
                                onChange= { handlechange}
                                />
                                <div className="input-group-append">
                                    <button type="submit"
                                    className="input-group-text text-light bg-danger"
                                    onClick= {handleSubmit}
                                    >
                                        <i className='fas fa-search'/>
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;