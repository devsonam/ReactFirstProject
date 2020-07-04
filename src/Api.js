import React, {Component} from 'react';
import axios from 'axios';

class Crud extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemList : [],
            msg: '',
            name: '',
            price: '',
            qty : ''
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

      handleName = (event) =>{
          this.setState({
              name: event.target.value
          })
      }

      handlePrice = (event) =>{
        this.setState({
            price: event.target.value
        })
    }

    handleQty = (event) =>{
        this.setState({
            qty: event.target.value
        })
    }

    save = () =>{
        let myData = new FormData();
	myData.append("pname", this.state.name);
	myData.append("pprice", this.state.price);
	myData.append("pqty", this.state.qty);
	var url = "https://www.firstenquiry.com/api/react/saveproduct.php";
	axios.post(url, myData).then(response=>{
	  this.setState({
		msg:response.data,
		name:'',
		price:'',
        qty:'',
        itemList: []
	  })
	  this.getItem(); //to refresh the list
	})

    }

    deleteProduct = (pid) =>{
        let myData = new FormData();
	myData.append("pid", pid);
	
	var url = "https://www.firstenquiry.com/api/react/deleteproduct.php";
	axios.post(url, myData).then(response=>{
	  this.setState({
		msg:response.data.status,
		
        itemList: []
	  })
	  this.getItem(); //to refresh the list with available item
	})
    }
      render(){
          return(
            <div className="container">
            <div className="row form-group">
            <div className = "col-md-12 form-group">
            <h2 className="text-info text-center p-2">New Item</h2>
            </div>
                <div className="col-md-1"></div>
               <div className="col-md-3">
                    <input type="text" value={this.state.name} className="form-control" onChange={this.handleName}/>
                    <i>Item Name</i>
               </div>
                <div className="col-md-2">
                <input type="text" value={this.state.price} className="form-control" onChange={this.handlePrice}/>
                <i>Item Price</i>
                </div>
                <div className="col-md-2">
                <input type="text" value={this.state.qty} className="form-control" onChange={this.handleQty}/>
                <i>Item Quantity</i>
                </div>

                <div className="col-md-2">
                    <button className="btn btn-danger btn-block" onClick={this.save}>Save</button>
               
                </div>

                <div className="col-md-1"></div>
            </div>
            <div className ="row">
            <div className = "col-md-12">
            <h2 className="text-info">Crud Operation</h2>
            <i className="text-success p-2">{this.state.msg}</i>
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
                                    <td>
                                        <button className="btn btn-danger" onClick={this.deleteProduct.bind(this, row.pid)}>Delete</button>
                                    </td>
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