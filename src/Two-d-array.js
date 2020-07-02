import React, {Component} from 'react';
class DataList extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: [
                    {name: "Laptop", price: 30000, qty: 5 },
                    {name: "Mouse", price: 1000, qty: 15 },
                    {name: "Keyboard", price: 5000, qty: 7 }
                 ],

                 name: '',
                 price: '',
                 qty: '',
                 msg: ''
                
                
                
                }
            
}

processName = (event) =>{
    this.setState({
        name: event.target.value
    })
}

processQty = (event) => {
    this.setState({
        qty: event.target.value
    })
}

processPrice = (event) => {
    this.setState({
        price: event.target.value
    })
}

save = () =>{
    var newItem = {name: this.state.name, price: this.state.price, qty: this.state.qty}
    this.setState({
        item: this.state.item.concat(newItem),
        name: '',
        qty: '',
        price: '',
        msg: 'Item Added Successfully'
    })
}

delete = (index) =>{
    this.state.item.splice(index, 1);
    this.setState({
        item: this.state.item,
        msg: 'Deleted Successfully'
    })
}
    render(){
        return (
            <div className="container">
            <div className ="row form-group text-center">
            <div className = "col-md-12">
            <h3 className="text-info">Multi Dimensional Array Using State Management</h3>
            <p className="text-danger">{this.state.msg}</p>
            </div>  
            
            </div>
            <div className="row text-center form-group">
                <div className="col-md-3 text-center">
                    <input type="text" value={this.state.name} className="form-control" onChange={this.processName}/>
                    <i>Item Name</i>
                </div>
                <div className="col-md-3 text-center">
                <input type="text" value={this.state.qty} className="form-control" onChange={this.processQty}/>
                <i>Item Qty</i>
                </div>
            <div className="col-md-3 text-center">
            <input type="text" value={this.state.price} className="form-control" onChange={this.processPrice}/>
            <i>Item Price</i>
            </div>
            <div className="col-md-3 text-center">
           <button className="btn btn-secondary btn-block" onClick ={this.save}>Save</button>
        </div>
            </div>

            <div className="row text-center">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <table className="table table-bordered">
                    <thead className="text-success">
                        <tr>
                            <th>SI No.</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {
                        this.state.item.map((row, index) =>{
                            return (
                                <tr key="index">
                                    <td>{index + 1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.qty * row.price}</td>
                                    <td><a href="javascript:void(0)" onClick = {this.delete.bind(this, index)}>Delete</a></td>
                                </tr>

                            
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="col-md-1"></div>
        </div>
            </div>
        );
    }
}

export default DataList;