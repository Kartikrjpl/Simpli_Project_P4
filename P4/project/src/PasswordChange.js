import React from "react"

class PasswordChange extends React.Component{
    render(){
        return(<div>
            <h3>To Change Password : </h3>
            <br></br>
            <label>New Password : </label>
            <input type="password" ></input>
            <br></br>
            <br></br>
            <br></br>
            
            <button>Update Password </button>
            <p></p>
            <button>Continue Shopping</button>
            
        </div>)
    }
}

export default PasswordChange;