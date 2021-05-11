import React from 'react'
import {Link} from 'react-router-dom'

function Nav (props) {
    const {authedUser} = props
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/#' >New Question</Link>
            <Link to='/#' >Leaderboard</Link>
            {!authedUser 
                ? <Link to='/login' >Login</Link>
                : <span>Welcome {authedUser}</span>
            }
        </div>
    );
}

export default Nav;
