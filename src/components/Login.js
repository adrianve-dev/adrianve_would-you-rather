import React, { Component } from 'react'

class Login extends Component {
    
    render(){
        return (
            <div>
                <h3>Login</h3>
                <div>
                    <select name='users'>
                        <option value='john-doe'>John Doe</option>
                        <option value='person-one'>Person One</option>
                        <option value='person-two'>Person Two</option>
                    </select>
                </div>
            </div>
        );

    }
}

export default Login;
