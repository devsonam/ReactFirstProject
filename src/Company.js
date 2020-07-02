import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

const hr = () => <div>From Hr Component</div>;
const leave = () => <div>From Leave Component</div>;
const emp = () => <div>From emp Component</div>;
const salary = () => <div>From Salary Component</div>;
const project = () => <div>From project Component</div>;

class Company extends Component{
    constructor(props){
        super(props)
    }
render(){
    const {path} = this.props.match; //to get current url path
   
    return (
        <div className="container">
            <div className ="row form-group">
            <div className = "col-md-4 text-center">
            <h2 className="text-danger">Multi Level Routing</h2>
              </div> 
              <div className = "col-md-8">
              <br />
                <ul className="nav nav-pills">
                    <li className="nav nav-item">
                        <Link className="nav-link" to={`${path}/hr`}>Manage Hr</Link>
                    </li>
                    <li className="nav nav-item">
                    <Link className="nav-link" to={`${path}/leave`}>Manage Leave</Link>
                </li>

                    <li className="nav nav-item">
                    <Link className="nav-link" to={`${path}/emp`}>Manage Employee</Link>
                </li>

                <li className="nav nav-item">
                <Link className="nav-link" to={`${path}/salary`}>Manage Salary</Link>
            </li>

            <li className="nav nav-item">
            <Link className="nav-link" to={`${path}/project`}>Manage Project</Link>
        </li>
                </ul>
              </div>  
           </div>


           <div className="row">
            <div className="col-md-12">
           
            <Switch>
            
                    <Route path={`${path}/hr`} exact Component = {hr} />
                    <Route path={`${path}/leave`} Component = {leave} />
                    <Route path={`${path}/emp`} Component = {emp} />
                    <Route path={`${path}/salary`} Component = {salary} />
                    <Route path={`${path}/project`} Component = {project} />
            </Switch>
                    
            </div>
           </div>
            </div>
    );
}
}

export default Company;