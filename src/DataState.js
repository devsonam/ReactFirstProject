import React, {Component} from 'react';

class ManageState extends Component{
    constructor(props){
        super();
        this.state = {
            msg: 1,
            input: 'Text Field is Empty',
            item: ["Apple", "Mango", "Orange", "Banana"],
            tempname: '',
            message: '',
            product: [
                {name: "Apple", price: 50, qty: 10},
                {name: "Banana", price: 100, qty: 24},
                {name: "Orange", price: 150, qty: 8},
                {name: "Grapes", price: 200, qty: 500}
        
            ]

        }
    }
    clickMe = () =>{
       this.setState ({
        msg : this.state.msg+1

       });
        
    }
    handleInputData = e=>{
         this.setState({
            input: e.target.value
        })
    }
    handleItem = i =>{
        this.setState({
            tempname: i.target.value //onKeyUp it pick the value of text field and store in tempname var of state
        })
    }
    saveItem = () =>{
        this.setState({
            item: this.state.item.concat(this.state.tempname),
            tempname : '',
            message :  "Item Added" //updating data under state
        })
    }
    // if any modification will happen in state then render function will call automatically
    render(){
        return(
            <div className="container height500">
            <div className ="row">
            <div className = "col-md-12 text-center">
                <h3>ReactJS State Management Example</h3>
                <button className="btn btn-primary" onClick={this.clickMe}>Click</button>
                <h4 className="text-danger">{this.state.msg}</h4>
            </div>
            </div>

            <div className ="row">
            <div className = "col-md-3 text-center">
                <h3>How to Handle Input Element</h3>
                <p>{this.state.input}</p>
                
                <input type="text" className="form-control" placeholder="Enter here" onKeyUp={this.handleInputData}/>
            </div>

            <div className = "col-md-3 text-center">
               
                <p>State Updates {this.state.tempname}</p>
                <i>{this.state.message}</i>
                <input type="text" value={this.state.tempname} className="form-control"  placeholder="Enter here" onChange={this.handleItem}/>
                <br />
                <button className="btn btn-warning" onClick={this.saveItem}>Save</button>
                
                <div className="form-group">
                    {
                        this.state.item.map((row, index) =>{
                            return(
                                <p key ={index}>{row}</p>
                            );
                        })
                    }
                </div>
                
            </div>

            <div className = "col-md-6 text-center">
            <input type="text" className="form-control"  placeholder="Enter here"/>
            <input type="text" className="form-control"  placeholder="Enter here"/>
            <input type="text" className="form-control"  placeholder="Enter here"/>
            <button className="btn btn-warning">Save</button>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                         </tr>   
                        </thead>
                        <tbody>
                            {
                                this.state.product.map((prod, index) =>{
                                    return (
                                        <tr key = {index}>
                                            <td>{prod.name}</td>
                                            <td>{prod.price}</td>
                                            <td>{prod.qty}</td>
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

export default ManageState;