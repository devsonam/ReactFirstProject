import React, {Component} from 'react';

class  MyProfile extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
    
        <table className="table table-bordered">
            <tr>
                <th>Name:</th>
                <td>{this.props.name}</td>
            
            </tr>
            <tr>
            <th>Mobile No:</th>
            <td>{this.props.mobile}</td>
        
        </tr>

        <tr>
        <th>DOB:</th>
        <td>{this.props.dob}</td>
    
    </tr>

    <tr>
    <th>Place of Birth:</th>
    <td>{this.props.bplace}</td>

</tr>
        </table>
    );
}
}

export default MyProfile;