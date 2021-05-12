import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { handleInitialData } from '../actions/shared';
import '../App.css';
import Login from './Login';
import Logout from './Logout';
import Nav from './Nav'

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
        <Route path='/login' render={({history}) => <Login history={history}/>} />
        <Route path='/logout' render={({history}) => <Logout dispatch={this.props.dispatch} history={history}/>} />
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
