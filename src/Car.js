import React, { Component } from "react";

class CarInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <div className ="row" key={this.props.id}>
            <div className="card">
            <div className = "col-md-12">
            <h2 className="text-info">{this.props.carname}</h2>
            <p>Price : Rs{this.props.price}</p>
            <p>Fuel: {this.props.fuel}</p>
            </div>  
            </div>
           
            </div>
            
        );
    }
}

export default CarInfo;