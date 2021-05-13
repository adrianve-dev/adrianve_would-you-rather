import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'
import CardQuestionPreview from './CardQuestionPreview'

class UnansweredQuestions extends Component{
    render(){
        const {authedUser, users, questions} = this.props
        
        if(!authedUser){
            return <Redirect to='/login' />
        }

        return(

            <div>
                {Object.keys(questions)
                    .filter((qid) => !questions[qid].optionOne.votes.includes(authedUser) && !questions[qid].optionTwo.votes.includes(authedUser))
                        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
                        .map((qid) => <CardQuestionPreview key={qid} user={users[questions[qid].author]} question={questions[qid]} />)}
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