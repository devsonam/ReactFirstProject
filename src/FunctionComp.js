import React from 'react';
import MyProfile from './Profile';

function MyFunction(){
    return(
        <div className="container">
        <div className ="row">
        <div className = "col-md-12">
           <MyProfile name="Rupam" mobile="5656666666" dob="12-05-1995" bplace="Marathalli"/>
            
        </div>  
        </div>
        </div>
    );
}
export default MyFunction;