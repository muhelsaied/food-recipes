import React from 'react';

export default  function Main({children, title, styleClass}) 
{
    return(
        <header>
           <div className="container-fluid">
                <div className={`row align-items-center ${styleClass}`}>
                    <div className="col text-center">
                        <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>
                            {title}
                        </h1>
                        <p>
                        {children}
                        </p>
                    </div>
                </div>
           </div> 
        </header>
    )
}   

Main.defaultProps = {
    title:'default title',
    styleClass: 'header-hero'
}

