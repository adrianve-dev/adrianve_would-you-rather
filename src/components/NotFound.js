import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound (props){

    return (
        <div>
            <h2>404</h2>
            <h3>That Question is Missing or does not exist</h3>
            <Link to='/'>
                <button>Return to Dashboard</button>
            </Link>
        </div>
    )
}