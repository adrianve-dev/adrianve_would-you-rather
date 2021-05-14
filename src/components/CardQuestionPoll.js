import React from 'react'

export default function CardQuestionPoll (props) {
    const {optionOne, optionTwo, handleVoteSelection} = props
    
    return (
        <div>
            <div onClick={() => handleVoteSelection('optionOne')}>
                {optionOne.text}
            </div>
            <div onClick={() => handleVoteSelection('optionTwo')}>
                {optionTwo.text}
            </div>
        </div>
    )
}