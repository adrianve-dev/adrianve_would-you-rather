import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Nav extends Component {

    render(){
        const {authedUser, users} = this.props
        return (
            <div>
                <Link to='/' >Home</Link>
                <Link to='/add' >New Question</Link>
                <Link to='/leaderboard' >Leaderboard</Link>
                {!authedUser
                    ? <Link to='/login'>Login</Link>
                    : <span>
                        Welcome, {users[authedUser].name}
                        <Link to='/logout'>Logout</Link>
                    </span>
                }
            </div>
        );
    }
}

const mapStateToProps = ({authedUser, users}) => {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Nav);