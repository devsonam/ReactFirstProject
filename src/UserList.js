import React, {Component} from 'react';

const userList = ["Manoj", "Ganesh", "Rupesh", "Jaaved", "Ali", "Alex", "Silex", "Anita"];
class User extends Component{
    render(){
        return(
            <div className="container p-3">
            <div className ="row text-center">
            {
            userList.map(username=>{
               return <div className = "col-md-3">
            <img src={`https://joeschmoe.io/api/v1/${username}`}/>
            <h5>{username}</h5>
            </div> 
            })
             
           
            }
            
            </div>
            </div>
        );
    }
}

export default User;