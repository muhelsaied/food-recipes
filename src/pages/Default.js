import React, { Component } from 'react';
import Main from'../compenets/main'
import { Link }  from 'react-router-dom'

class Default extends Component {
    render() {
        return (
            <div>
                <Main title="404" styleClass="not-found">
                    <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                    the recipe Not found
                    </h1>
                    <Link to="/" className="text-uppercase btn btn-warning btn-lg mt-5">
                        back to main page
                        </Link>
                    </Main>
            </div>
        );
    }
}

export default Default;