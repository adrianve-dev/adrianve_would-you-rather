import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'
import CardQuestionPreview from './CardQuestionPreview'
import NoQuestions from './NoQuestions'

class UnansweredQuestions extends Component{
    render(){
        const {authedUser, users, questions} = this.props
        
        if(!authedUser){
            return <Redirect to='/login' />
        }

        const questionList = Object.keys(questions)
                                .filter((qid) => !questions[qid].optionOne.votes.includes(authedUser) && !questions[qid].optionTwo.votes.includes(authedUser))
                                    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        return(

            <div>
                {questionList.length > 0
                    ? questionList.map((qid) => <CardQuestionPreview key={qid} user={users[questions[qid].author]} question={questions[qid]} />)
                    : <NoQuestions />
                }
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(UnansweredQuestions)