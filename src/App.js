import { Switch, Route, NavLink} from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Todo from './Todo';
import Form from './Form';
import NavLogin from './NavLogin';

function App() {
  const [user] = useState({ name: 'Adara' });

  return (
    <div className="App">
      <header className="App-header">
        <nav className="NavBar">
        <ul>
          <li><NavLink to = "/" exact>Home</NavLink></li>
          <li><NavLink to = "/Todo">Todo</NavLink></li>
          <li><NavLink to = "/AboutMe">About Me I'm speshal</NavLink></li>
          <li><NavLink to = "/Form">Form</NavLink></li>
          <NavLogin user={user} />
        </ul>
        </nav>
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/AboutMe" >
          <AboutMe />
        </Route>
        <Route path="/Todo" >
          <Todo />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
