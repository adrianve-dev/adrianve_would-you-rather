import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { getQuestions, addQuestion, addQuestionAnswer } from './questions'
import { getUsers, addUserAnswer, addUserQuestion } from './users'

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

export function handleAddQuestion(question){
    return (dispatch) => {
        _saveQuestion(question)
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion({
                id: question.id,
                author: question.author
            }))
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