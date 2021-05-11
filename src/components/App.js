import { Route } from 'react-router';
import '../App.css';
import Login from './Login';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Built with React and Redux
      </header>
      <Nav />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
