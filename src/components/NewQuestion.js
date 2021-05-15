import React, { Component } from 'react'
import { connect } from 'react-redux'
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

    handleSubmit = (optionOne, optionTwo) => {
        const {authedUser, dispatch} = this.props

        dispatch(handleAddQuestion({authedUser, optionOne, optionTwo}))
        
        this.history.push('/')
    }

    render(){
        const {optionOne, optionTwo} = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit(optionOne, optionTwo)}>
                    <h3>New Poll</h3>
                    <input value={optionOne} placeholder='Option One' onChange={(e) => this.handleFormChange(e.target.value, this.one)} />
                    <input value={optionTwo} placeholder='Option Two' onChange={(e) => this.handleFormChange(e.target.value, this.two)} />
                    <button type='submit' disabled={optionOne === '' && optionTwo === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)