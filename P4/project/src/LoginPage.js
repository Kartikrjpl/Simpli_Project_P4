import React from "react"
import PasswordChange from "./PasswordChange";
import  {Route,NavLink,HashRouter,Redirect} from "react-router-dom";
import Login from "./Login";
import { createHashHistory } from 'history'

import { useHistory } from "react-router-dom";

class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "admin",
            password : "password",
            login: true

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
   
    handleLogin(e){
        e.preventDefault();
        
        const username1 = e.target.username.value;
        const password1 = e.target.password.value;
        const {username, password} = this.state;
        if(password1===password && username===username1){
            
            this.props.history.push("/home");
        }
        else{
            alert("Invalid Username or Password");
        }
      
 
    };
    changePassword(e){
        
        e.preventDefault();
        const currentPassword1 = e.target.currentPassword.value;
        const newPassword1 = e.target.newPassword.value;
        const {username, password} = this.state;
        if(currentPassword1===password){
            this.setState({password : newPassword1});

            alert("Password Changed");
        }
        else{
            alert("Invalid Username or Password");
        }
      
 
    };
   

    render(){
        return(
            <div>
                {/* <button onClick={this.handleLogin}>Login</button> */}
                <h2>Welcome to the Kitchen Story</h2>
                <h3>Login Page</h3>
                <form type="post" onSubmit = {(ev) => this.handleLogin(ev)}>
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" required></input>
                <br></br>
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" required></input>
                <br></br>
                
                <input type="submit"  value="Login"></input>
                </form>
                
                <div>

                <form type="post" onSubmit = {(e2) => this.changePassword(e2)}>
                <label for="currentPassword">Current Password : </label>
                <input type="password" id="currentPassword" name="currentPassword" required></input>
                <br></br>
                <label for="newPassword">New Password : </label>
                <input type="password" id="newPassword" name="newPassword" required></input>
                <br></br>
                
                <input type="submit"  value="Update Password"></input>
                </form>

                </div>           
                </div>
        //     {/* </div>
        // <div style={{ marginTop: 10 }}>
            
        //     <label>Username : </label>
        //     <input type="text" required></input>
        //     <br></br>
        //     <br></br>
        //     <label>Password : </label>
        //     <input type="password" required></input>
        //     <br></br>
        //     <br></br>
        //     <br></br>
            
        //     <button onClick={this.handleLogin}>Login</button>
            
        // </div>*/
        // }
        );
    }
}

export default LoginPage;