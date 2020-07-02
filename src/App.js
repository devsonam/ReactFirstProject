import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import CarInfo from './Car';


class App extends Component {
  constructor(){
    super();
    this.state = {
      itemList: [],
      carlist: []
    }
    this.getItem();
    this.getCar();
  }
  getItem = () =>{
    axios.get("item.json").then(response =>{
      this.setState({
        itemList:response.data
      })
    })
  }

  getCar = () =>{
    axios.get("carList.json").then(response =>{
      this.setState({
        carlist:response.data
      })
    })
  }
render(){
  return (
    
      <div className="container">
            <div className ="row">
            <div className = "col-md-12">
            <h2 className="text-info">Items are : {this.state.itemList.length}</h2>
            </div>  
              {
                this.state.itemList.map((row, index)=>{
                  return(
                    <div className = "col-md-4">
                     <p>{index} : {row}</p>
                    </div>

                    
                  );
                })
              }
            </div>

            <div className="row">
                      
                {
                  this.state.carlist.map((row, index) =>{
                    return(
                      <div className="col-md-4">
                      <CarInfo id ={index} carname = {row.name} price ={row.price} fuel ={row.fuel}/>
                      </div>
                      
                    );
                  })
                }
                    </div>
            </div>
      
    
  );
}
}

export default App;

 /* Types of JSX(Javascript & xml) - How many ways we can write html code in reactjs
 1. <h1>This is single element</h1> -- if JSX has single element then no need of any parent tag
 2. 
 <div>
    <h1>Hello from h1</h1>
    <h2>Hello from h2</h2>
  </div>
  --> If JSX has more than one element then it must be under parent tag
  3. (JSX Fragement)
  <>
    <h1>Hello from h1</h1>
    <h2>Hello from h2</h2>
  </>
  4.    
  example : item = ["Apple", "Orange", "Banana"];
  [
    <h1>Hello from h1</h1>
    <h2>Hello from h2</h2>
    <h3>Hello from h2</h3>
  ]
  */