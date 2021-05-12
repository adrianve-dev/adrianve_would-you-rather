import { ADD_QUESTION, ADD_QUESTION_ANSWER, GET_QUESTIONS } from "../actions/questions";


export default function questions(state = {}, action){
    switch(action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }
        case ADD_QUESTION_ANSWER:
            const {answer} = action

            
            let question = {}
            if(answer === 'optionOne'){
                question = {
                    ...state[action.qid],
                    optionOne: {
                        ...state[action.qid].optionOne,
                        votes: state[action.qid].optionOne.concat(action.authedUser)
                    }
                }
            }
            else{
                question = {
                    ...state[action.qid],
                    optionTwo: {
                        ...state[action.qid].optionTwo,
                        votes: state[action.qid].optionTwo.concat(action.authedUser)
                    }
                }
            }

            return {
                ...state,
                [action.qid]: question
            }
        default:
            return state
    }
}