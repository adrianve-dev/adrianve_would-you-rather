import React from 'react'
import {Redirect} from 'react-router-dom'
import LeaderboardCard from './LeaderboardCard'

export default function Leaderboard (props) {
    if(!props.authedUser){
        return <Redirect to={{
                    pathname:'/login',
                    state: {referrer: '/leaderboard'}
                }} />
    }

    const {users} = props

    let userList = []
    Object.keys(users).forEach((id) => {
        let score = Object.keys(users[id].answers).length + users[id].questions.length
        userList.push({
            id,
            score
        })
    })

    return(
        <div>
            <h2>Leaderboard</h2>
            {userList.sort((a, b) => b.score - a.score).map((key) => <LeaderboardCard key={users[key.id].id} user={users[key.id]}/> )}
        </div>
    )
}