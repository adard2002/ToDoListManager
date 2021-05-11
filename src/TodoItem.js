import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

export default function TodoItem(props)
{
  const { todo } = props;
  const pillText = todo.completed ? 'Complete' : 'Pending';
  const pillVariant = todo.compelted ? 'Danger' : 'Success';

  return (
    <Toast>
      <Toast.Header>
        <Badge pill variant={pillVariant}>{pillText}</Badge>
        <strong class="ml-2 mr-auto">{todo.assignedTo}</strong>
      </Toast.Header>
      <Toast.Body>
        {todo.title}
        <div className="textRight">
          <small>Difficulty: {todo.difficulty}</small>
        </div>
      </Toast.Body>
    </Toast>
  )
}