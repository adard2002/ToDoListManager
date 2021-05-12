import { Redirect } from 'react-router';
import { useAuth } from '../../contexts/auth';

export default function Login() {
  const { user, login, logout } = useAuth();

  if (user) {
    function handleLogout() {
      logout();
    }
    return (
      <button onClick={handleLogout}>Logout</button>
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const { target } = e;
    const { username, password } = target.elements;

    if (!await login(username.value, password.value)) {
      target.reset();
    } else {
      Redirect('./Home');
    }
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label>Username <input type="text" name="username" /></label>
      <label>Password <input type="password" name="password" /></label>
      <button>Login</button>
    </form>
  );
}