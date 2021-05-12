import Alert from 'react-bootstrap.Alert';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/auth';

export default function Bootstra()
{
  const { user } = useAuth();

  return (
    <>
      <h1>Bootstrap here</h1>
      <Alert variant="danger">FAlert {user.name}</Alert>

      <Button variant="danger">Ello!</Button>
    </>
  )
}