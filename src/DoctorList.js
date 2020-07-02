import React, {Component} from 'react';

class DoctorList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
              <div className ="row text-center form-group">
              <div className = "col-md-12 p-2 border">
              <h4 className="text-info">{this.props.id} {this.props.name}</h4>
              <p className="text-danger">{this.props.name}</p>
              <p className="text-danger">{this.props.edu}</p>
              <span className="badge badge-primary p-2">{this.props.batch}</span>
                
            </div>  
            
            </div>
           
        );
    }
}
export default DoctorList;