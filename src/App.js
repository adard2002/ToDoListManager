import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="NavBar"><ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Todo">Todo</a></li>
          <li><a href="/AboutMe">About Me I'm speshal</a></li>
        </ul></nav>
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/AboutMe" exact>
          <AboutMe />
        </Route>
        <Route path="/Todo" exact>
          <Todo />
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
