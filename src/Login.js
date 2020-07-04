import React, {Component} from 'react';

class LoginUser extends Component{
    constructor(){
        super()
        this.state = {
            uname: '',
            password: '',
            msg: ''

        }
 }
 handleUname = (event) =>{
   this.setState({
    uname: event.target.value
   })
 }

 handlePassword = (event) =>{
    this.setState({
        password: event.target.value
       })
 }

 loginCheck = () =>{
  if((this.state.uname == "") || (this.state.password == "")){
        this.setState({
            msg: "Invalid Uname and Password"
        })
  }else{
      sessionStorage.setItem("username", this.state.uname);
        this.setState({
            msg: "Please Wait Redirecting..."
        })
      
      window.location.reload(); // to reload the current page
  }
 }
render(){
    return (
        <div className="container">
            <div className="row form-group p-2">
           
            <div className="col-md-4"></div>
                <div className = "col-md-4 form-group">
                    <div className="card">
                        <div className="card-header bg-secondary text-white"> Login</div>
                        <div className="card-body"> 
                                <i className="text-success text-center">{this.state.msg}</i>
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="text" className="form-control" onChange={this.handleUname}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={this.handlePassword}/>
                            </div>
                        </div>
                        <div className="card-footer text-center"> 
                            <button className="btn btn-primary text-center" onClick={this.loginCheck}>Login</button>
                        </div>
                    </div>
             </div>
             <div className="col-md-4"></div>
                </div>
                    </div>
    );
}
}

export default LoginUser;