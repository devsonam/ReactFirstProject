import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopNav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-light">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/user-list">User List</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/state-management">State Management</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/multi-user">Multi Array</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/array-one">Array One</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link text-white" to="/array-two">Array Two</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/manage-props">Doctor List</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/company">Multi Level Routing</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/crud">Crud Operation</Link>
                </li>

            </ul>
        </nav>
        );
    }
}

export default TopNav;