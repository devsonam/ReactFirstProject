import React, {Component} from 'react';
import DoctorList from './DoctorList';

class Doctor extends Component{
    constructor(){
        super()
        this.state = {
            drList: [
                {name: "Dr. Alex", edu: "M.B.B.S", batch: "1995"},
                {name: "Dr. Ganesh", edu: "M.B.B.S", batch: "1996"},
                {name: "Dr. Sonam", edu: "M.B.B.S", batch: "1997"},
                {name: "Dr. Vicky", edu: "M.B.B.S", batch: "1998"}
        
       
            ]
        }
    }
    render(){
        return(
            <div className="container">
            <div className ="row form-group">
            <div className = "col-md-12">
            <h2 className="text-info">ReactJS Class Component Props Example</h2>
            </div>  
            </div>

            <div className ="row">
                {
                    this.state.drList.map((row, index) =>{
                        return(
                            <div className = "col-md-4" key={index}>
                            <DoctorList id={index} name ={row.name} edu={row.edu} batch={row.batch}/>
                            </div>
                        );
                       
                    })
                }
         </div>
            </div>
        );
    }
}
export default Doctor;