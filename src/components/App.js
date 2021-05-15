import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { handleInitialData } from '../actions/shared';
import '../App.css';
import Login from './Login';
import Logout from './Logout';
import Nav from './Nav'
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions from './UnansweredQuestions';
import NotFound from './NotFound';
import CardQuestion from './CardQuestion';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';

class App extends Component {
  state = {
    showUnanswered: true
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  handleShowUnanswered = () => {
    this.setState(() => ({
      showUnanswered: true
    }))
  }  

  handleShowAnswered = () => {
    this.setState(() => ({
      showUnanswered: false
    }))
  }

  render(){
    const {authedUser, users, dispatch} = this.props

    return (
      <div className="App">
        <header className="App-header">
          Built with React and Redux
        </header>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <div>
              <h3>
                  <span style={{backgroundColor: this.state.showUnanswered ? 'lightgray' : 'white'}} onClick={this.handleShowUnanswered}>Unanswered Questions</span>
                  <span style={{backgroundColor: !this.state.showUnanswered ? 'lightgray' : 'white'}} onClick={this.handleShowAnswered}>Answered Questions</span>
              </h3>
              {this.state.showUnanswered
                ? <UnansweredQuestions />              
                : <AnsweredQuestions />
              }
            </div>
          </Route>
          <Route path='/login' component={Login} />
          <Route path='/logout' render={({history}) => <Logout dispatch={dispatch} history={history}/>} />
          <Route path='/questions/:qid' component={CardQuestion} />
          <Route path='/leaderboard'>
            <Leaderboard authedUser={authedUser} users={users} />
          </Route>
          <Route path='/add' component={NewQuestion} />
          <Route path='/404' component={NotFound} />
        </Switch>
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
