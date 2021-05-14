import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { getQuestions, addQuestionAnswer } from './questions'
import { getUsers, addUserAnswer } from './users'

export function handleInitialData(){
    return(dispatch) => {
        _getUsers()
        .then((users) => {
            dispatch(getUsers(users))
        })
        _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions))
        })
    }
}

export function handleSaveQuestionAnswer(answer){
    return (dispatch) => {
        _saveQuestionAnswer(answer)
        .then((result) => {
            console.log('_saveQuestionAnswer result: ', result)
            dispatch(addQuestionAnswer(answer))
            dispatch(addUserAnswer(answer))
        })
    }
}