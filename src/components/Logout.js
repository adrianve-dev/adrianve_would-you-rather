import { setAuthedUser } from "../actions/authedUser"

export default function Logout (props) {
    const handleLogout = (e) => {
        e.preventDefault()
        props.dispatch(setAuthedUser(null))
        props.history.push('/')
    }
    return(
        <div>
            <h3>Are you sure you want to Logout?</h3>
            <div>
                <button onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </div>
    )
}