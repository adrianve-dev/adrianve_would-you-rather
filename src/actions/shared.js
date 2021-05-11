import { users, questions } from '../utils/_DATA'
import { getQuestions } from './questions'
import { getUsers } from './users'

export function handleInitialData(){
    return(dispatch) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
    }
}