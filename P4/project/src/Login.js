// import React from "react"

// class Login extends React.Component{
//     render(){
//         return(   <div>
//             <form type="post" onSubmit={(event) => this.props.onSubmit(event)}>
//             <label for="username">Username : </label>
//             <input type="text" id="username" name="username" required></input>
//             <br></br>
//             <label for="password">Password : </label>
//             <input type="password" id="password" name="password" required></input>
//             <br></br>
//             <input type = "submit" value="submit"/>
//             </form>
//         </div>);
//     }
// }

// export default Login;


import React from 'react';
import { useHistory } from "react-router-dom";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            adminPass: "Admin",
            adminUsername: "Admin"
        }
    }

    validate(event) {
        const pass = event.target.password.value;
        const username = event.target.username.value;

        const {adminPass, adminUsername} = this.state;

        if (adminUsername !== username) {
            alert("The username is incorrect, enter again")
        } else if (adminPass !== pass) {
            alert("The password is incorrect, enter again")
        } else {
            // history.push("/home");
            this.props.history.push("/home");
        }
    }

    render() {
        // var history = useHistory();
        return (
            <div>
                <form type="post" onSubmit={(event) => this.validate(event)}>
                    <pre>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" />
                        <br />

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        <br />

                        <input　type="submit" value="submit" />
                    </pre>
                </form>
            </div>
        )
    }
}

export default Login;