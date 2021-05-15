import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    one = 'one'
    two = 'two'
    
    handleFormChange = (text, option) => {
        option === this.one
            ? this.setState(() => ({
                optionOne: text
            }))
            : this.setState(() => ({
                optionTwo: text
            }))
    }

    handleSubmit = (e, optionOne, optionTwo) => {
        e.preventDefault()
        const {authedUser, dispatch, history} = this.props

        const newQuestion = {
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        console.log('newQuestion', newQuestion)

        dispatch(handleAddQuestion(newQuestion))
        
        history.push('/')
    }

    render(){
        if(!this.props.authedUser){
            return <Redirect to='/login' />
        }

        const {optionOne, optionTwo} = this.state
        const disableButton = optionOne === '' || optionTwo === ''
        
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, optionOne, optionTwo)}>
                    <h3>New Poll</h3>
                    <input value={optionOne} placeholder='Option One' onChange={(e) => this.handleFormChange(e.target.value, this.one)} />
                    <input value={optionTwo} placeholder='Option Two' onChange={(e) => this.handleFormChange(e.target.value, this.two)} />
                    <button type='submit' disabled={disableButton}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}, props) => {
    const {history} = props

    return {
        authedUser,
        history
    }
}

export default connect(mapStateToProps)(NewQuestion)