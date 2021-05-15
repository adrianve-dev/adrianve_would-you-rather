import React from 'react'

export default function LeaderboardCard (props) {
    const {avatarURL, name, answers, questions} = props.user
    const answerCount = Object.keys(answers).length
    const questionCount = questions.length
    const score = answerCount + questionCount

    return(
        <div style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', margin: 'auto', marginTop: 5, marginBottom:5, padding: 10, width: '50%'}}>
            <img src={avatarURL} alt={name} />
            <div>
                <h3>{name}</h3>
                <div>
                    <p>Answered Questions: {answerCount}</p>
                    <p>Created Questions: {questionCount}</p>
                    <hr style={{width:'10%'}} />
                    <p>Score: {score}</p>
                </div>
            </div>
        </div>
         
    )
}