import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'


//todo: separate poll and results into own components
class CardQuestion extends Component{
    handleVoteSelection = (answer) => {
        const {authedUser, qid, dispatch} = this.props

        dispatch(handleSaveQuestionAnswer({authedUser, qid, answer}))
    }

    render(){
        if(!this.props.qid){
            return <Redirect to='/404' />
        }

        const {qid, question, voter, user} = this.props
        const {optionOne, optionTwo} = question
        const {name, avatarURL} = user

        return (
            <div>
                <div>
                    <img src={avatarURL} alt={name} style={{width: 50}} />
                    {name} asks:
                </div>
                <div>
                    <span>Would You Rather</span>
                    {!Object.keys(voter.answers).includes(qid)
                        ? <div>
                            <div onClick={() => this.handleVoteSelection('optionOne')}>
                                {optionOne.text}
                            </div>
                            <div onClick={() => this.handleVoteSelection('optionTwo')}>
                                {optionTwo.text}
                            </div>
                        </div>
                        : <div>
                            <div style={{color: voter.answers[qid] === 'optionOne' ? 'green' : 'gray'}}>
                                <strong>{optionOne.text}</strong><span>{` :: ${(optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}% - ${optionOne.votes.length} votes`}</span>
                            </div>
                            <div style={{color: voter.answers[qid] === 'optionTwo' ? 'green' : 'gray'}}>
                                <strong>{optionTwo.text}</strong><span>{` :: ${(optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}% - ${optionTwo.votes.length} votes`}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, props) => {
    const {qid} = props.match.params

    return {
        qid,
        authedUser,
        voter: users[authedUser],
        user: users[questions[qid].author],
        question: questions[qid]
    }
}

export default connect(mapStateToProps)(CardQuestion)