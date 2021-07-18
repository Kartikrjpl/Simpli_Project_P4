import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    constructor() {
        super();
        this.state = {
            username : "admin",
            password : "password",
            isLogin: ""

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.setLogin = this.setLogin.bind(this)
        this.setSignup = this.setSignup.bind(this)
    }

    setLogin() {
        this.setState({
            isLogin: "login"
        })
    }

    setSignup() {
        this.setState({
            isLogin: "changePass"
        })
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

            alert("Password has been Updated Please Login again");
        }
        else{
            alert("Invalid Username or Password");
        }
      
 
    };
    render() {

        let page;
        if (this.state.isLogin==="login") {
            page = <div>
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
            </div>
            
        } else if(this.state.isLogin==="changePass") {
            page = 
            <div>
                <h2>You can change the Password in this window</h2>

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
        }
        else{
            page = <div>
                Please chose one of the following.
            </div>
        }

        return (
            <div>
                <div>
                    <button onClick={this.setLogin}>Login</button>
                    <button onClick={this.setSignup}>Change Password</button>
                </div>
                    {page}
                <div>
                
                </div>
            </div>
        )
    }
}


export default MainPage;