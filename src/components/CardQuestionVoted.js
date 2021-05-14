import React from 'react'

export default function CardQuestionVoted (props) {
    const {optionOne, optionTwo, authedUserAnswer} = props

    return (
        <div>
            <div style={{color: authedUserAnswer === 'optionOne' ? 'green' : 'gray'}}>
                <strong>{optionOne.text}</strong><span>{` :: ${(optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}% - ${optionOne.votes.length} votes`}</span>
            </div>
            <div style={{color: authedUserAnswer === 'optionTwo' ? 'green' : 'gray'}}>
                <strong>{optionTwo.text}</strong><span>{` :: ${(optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}% - ${optionTwo.votes.length} votes`}</span>
            </div>
        </div>
    )
}