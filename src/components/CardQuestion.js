import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

class CardQuestion extends Component{
    handleVoteSelection = (answer) => {
        const {authedUser, qid, dispatch} = this.props

        dispatch(handleSaveQuestionAnswer({authedUser, qid, answer}))
    }

    render(){
        if(!this.props.qid){
            return <Redirect to='/404' />
        }

        const {optionOne, optionTwo} = this.props.question
        const {name, avatarURL} = this.props.user

        return (
            <div>
                <div>
                    <img src={avatarURL} alt={name} style={{width: 50}} />
                    {name} asks:
                </div>
                <div>
                    <span>Would You Rather</span>
                    <div>
                        <div onClick={() => this.handleVoteSelection('optionOne')}>
                            {optionOne.text}
                        </div>
                        <div onClick={() => this.handleVoteSelection('optionTwo')}>
                            {optionTwo.text}
                        </div>
                    </div>
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
        user: users[questions[qid].author],
        question: questions[qid]
    }
}

export default connect(mapStateToProps)(CardQuestion)