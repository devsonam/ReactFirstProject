import React, {Component} from 'react';
import axios from 'axios';

class Crud extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemList : []
        }
        this.getItem();
    }
    getItem = () =>{
        var url = "https://www.firstenquiry.com/api/react/productlist.php"
        axios.get(url).then(response =>{
          this.setState({
            itemList:response.data
          })
        })
      }
      render(){
          return(
            <div className="container">
            <div className ="row">
            <div className = "col-md-12">
            <h2 className="text-info">Crud Operation</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-danger">
                            <th>Item No.</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Item Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.itemList.map((row, index) =>{
                                   return (
                                    <tr key={index}>
                                    <td>{row.pid}</td>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.totalprice}</td>
                                    <td>---Delete---</td>
                                 </tr>
                                   );
                                })
                            }
                        </tbody>
                    
                </table>
            </div>  
           </div>
            </div>
          );
      }
    
}

export default Crud;