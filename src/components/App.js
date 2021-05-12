import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { handleInitialData } from '../actions/shared';
import '../App.css';
import Login from './Login';
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {authedUser, users, questions} = this.props

    return (
      <div className="App">
        <header className="App-header">
          Built with React and Redux
        </header>
        <Nav />
        {authedUser}
        <div>
          {Object.keys(users).map((id) => <p key={id}>{id}</p>)}
        </div>
        <div>
          {Object.keys(questions).map((id) => <p key={id}>{id}</p>)}
        </div>
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

const mapStateToProps = ({users, questions, authedUser}) =>{
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App);
