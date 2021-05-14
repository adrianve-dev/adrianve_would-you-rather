import React from 'react'
import {getPercentage} from '../utils/utils'

export default function CardQuestionVoted (props) {
    const {optionOne, optionTwo, authedUserAnswer} = props
    const optionOneCount = optionOne.votes.length
    const optionTwoCount = optionTwo.votes.length

    return (
        <div>
            <div style={{color: authedUserAnswer === 'optionOne' ? 'green' : 'gray'}}>
                <strong>{optionOne.text}</strong><span>{` :: ${getPercentage(optionOneCount, optionTwoCount)}% - ${optionOneCount} votes`}</span>
            </div>
            <div style={{color: authedUserAnswer === 'optionTwo' ? 'green' : 'gray'}}>
                <strong>{optionTwo.text}</strong><span>{` :: ${getPercentage(optionTwoCount, optionOneCount)}% - ${optionTwoCount} votes`}</span>
            </div>
        </div>
    )
}