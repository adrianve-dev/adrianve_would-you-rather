import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault()
        let id = e.target.value
        const {dispatch, location} = this.props
        dispatch(setAuthedUser(id))
        const hasRef = location.state && location.state.referrer
        hasRef ? this.props.history.push(location.state.referrer) : this.props.history.push('/')
    }

    render(){
        const {users} = this.props

        return (
            <div>
                <h3>Login</h3>
                <div>
                    <select name='users' value='none' onChange={(e) => this.handleLogin(e)}>
                        <option value="none" disabled>Select User</option>
                        {Object.keys(users).map((id) => <option key={id} value={id}>{users[id].name}</option>)}
                    </select>
                </div>
            </div>
        );

    }
}

const mapStateToProps = ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);
