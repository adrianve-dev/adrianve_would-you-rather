import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import CardQuestionPoll from './CardQuestionPoll'
import CardQuestionVoted from './CardQuestionVoted'

class CardQuestion extends Component{
    handleVoteSelection = (answer) => {
        const {authedUser, qid, dispatch} = this.props

        dispatch(handleSaveQuestionAnswer({authedUser, qid, answer}))
    }

    render(){
        if(!this.props.questionKeys.includes(this.props.qid)){
            return <Redirect to={{
                        pathname:'/404',
                        state: {referrer: ''}
                    }} />
        }
        
        if(!this.props.question || !this.props.user){
            return <Redirect to='/login' />
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
                        ? <CardQuestionPoll optionOne={optionOne} optionTwo={optionTwo} handleVoteSelection={this.handleVoteSelection} />
                        : <CardQuestionVoted optionOne={optionOne} optionTwo={optionTwo} authedUserAnswer={voter.answers[qid]} />
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
        questionKeys: Object.keys(questions),
        authedUser,
        voter: users[authedUser],
        user: questions[qid] ? users[questions[qid].author] : null,
        question: questions[qid]
    }
}

export default connect(mapStateToProps)(CardQuestion)