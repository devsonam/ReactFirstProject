import React, { Component } from "react";
import MyProfile from './Profile';

class MyClass extends Component{
    render(){
        return(
            <div className="container">
            <div className ="row">
            <div className = "col-md-6">
            <h2 className="text-info">Component wth Parameters</h2>
               <MyProfile name="sonam" mobile="5656666666" dob="12-05-1995" bplace="Marathalli"/>
                
            </div>  
            <div className = "col-md-6">
            <h2 className="text-info">Component wth Parameters</h2>
            <MyProfile name="Rupam" mobile="5656666666" dob="12-05-1995" bplace="Marathalli"/>
             
         </div> 
            </div>
            </div>
        );
    }
}

export default MyClass;