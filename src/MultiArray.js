import React, {Component} from 'react';

const user = [
    {name: "Sonam", mobile:"5267676472", edu: "B.Tech"},
    {name: "Rupam", mobile:"987687777", edu: "B.C.A"},
    {name: "Vicky", mobile:"8766666666", edu: "B.Tech"},
    {name: "Ashu", mobile:"345656565656", edu: "B.Tech"},
    {name: "Abhi", mobile:"3464356536", edu: "B.C.A"},
    {name: "Rahul", mobile:"8787878787", edu: "B.Tech"},
    {name: "Deepak", mobile:"349797979", edu: "B.Tech"}


];
class UserList extends Component{
    render(){

        const rowValue =   user.map(row=>{
            return (
                <div className = "col-md-3 form-group">
                    <div className ="card">
                        <div className="card-header bg-info text-white">
                            {row.name}
                        </div>
                        <div className="card-body">
                            <p>Contact No: {row.mobile}</p>
                            <p>Contact No: {row.edu}</p>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div className="container">
            <div className ="row">
            <div className = "col-md-12">
                <h3 className="text-center">{user.length} Multi Dimentional Array Example</h3>
         </div> 
            </div>
            <div className ="row">
            { rowValue }
            </div>

            </div>
        );
    }
}

export default UserList;