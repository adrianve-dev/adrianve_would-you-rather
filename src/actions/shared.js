import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getQuestions } from './questions'
import { getUsers } from './users'

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