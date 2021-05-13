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

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          Built with React and Redux
        </header>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <div>
              <h3>Unanswered Questions</h3>
              <UnansweredQuestions />
              <hr />
              <h3>Answered Questions</h3>
              <AnsweredQuestions />
            </div>
          </Route>
          <Route path='/login' render={({history}) => <Login history={history}/>} />
          <Route path='/logout' render={({history}) => <Logout dispatch={this.props.dispatch} history={history}/>} />
          <Route path='/questions/:qid' component={CardQuestion} />
          <Route path='/404' component={NotFound}/>
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
