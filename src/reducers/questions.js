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
            const {qid, answer, authedUser} = action.answer

            
            let question = {}
            if(answer === 'optionOne'){
                question = {
                    ...state[qid],
                    optionOne: {
                        ...state[qid].optionOne,
                        votes: state[qid].optionOne.votes.concat(authedUser)
                    }
                }
            }
            else{
                question = {
                    ...state[qid],
                    optionTwo: {
                        ...state[qid].optionTwo,
                        votes: state[qid].optionTwo.votes.concat(authedUser)
                    }
                }
            }

            return {
                ...state,
                [qid]: question
            }
        default:
            return state
    }
}