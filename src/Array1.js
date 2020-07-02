import React, {Component} from 'react';

class Array1 extends Component{
    constructor(props){
    super(props);
    this.state ={
        product: ["Mobile", "Apple", "Banana", "Orange"],
        newProduct: '',
        msg: ''
    }
    }
    handleItem = (event) =>{
        this.setState({
            newProduct: event.target.value
        })
    }

    saveItem = () => {
        this.setState({
            product: this.state.product.concat(this.state.newProduct),
            newProduct: '',
            msg: 'Item Added Successfully'
        })
    }
    deleteItem = (index) =>{
       this.state.product.splice(index, 1); //specific element deleted from array 
       this.setState({
           product: this.state.product, // after delete remaining element over ridding in same array
           msg: 'Item deleted Successfully'
       })
    }
    render(){
       return(
        <div className="container">
        <div className ="row">
        <div className="col-md-3">
        <h3 className="text-center form-group">Add Element</h3>
        <div className="border p-2">
            <input type="text" value={this.state.newProduct} className="form-control" onChange={this.handleItem}/>
            <br />
            <button className="btn btn-warning btn-block" onClick={this.saveItem}>Add</button>
        </div>
        </div>
        <div className = "col-md-9">
        <h2 className="text-center form-group">Single Dimensional Array Using State Management</h2>
        <p className="text-center text-info">{this.state.msg}</p>
            <div className="row text-center">
               {
                   this.state.product.map((pro, index)=>{
                       return (
                           <div className="col-md-3 form-group p-2 border">
                                <div className="text-center">
                                   <p> {pro}</p>
                                   <a href="javascript:void(0)" onClick={this.deleteItem.bind(this, index)} >Delete</a>
                                </div>
                           </div>
                       );
                   })
               }
            </div>
        </div>  
       
        </div>
        </div>
       );
    }
}
export default Array1;