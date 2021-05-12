import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


const todoList = [
  {
    "id": 1,
    "title": "Do the dishes, pots and pans",
    "difficulty": 1,
    "assignedTo": "John",
    "completed": false
  },
  {
    "id": 2,
    "title": "Take the dog for a nice long walk, walk 3 miles at least",
    "difficulty": 1,
    "assignedTo": "Cathy",
    "completed": true
  },
  {
    "id": 3,
    "title": "Run around the block and check out what ppl are doin these days",
    "difficulty": 4,
    "assignedTo": "Rosie",
    "completed": false
  }
];

export default function Todo(){
    const incompletedCount = todoList.filter(todo => !todo.completed).length;

  return(
    <div className="wrapper">
      <h1>
        To Do List Manager <Badge variant="secondary">{incompletedCount}</Badge>
      </h1>
      {/* <TodoForm />
      {todoList.map(item => (
        <TodoItem todo={item} />
      ))} */}
      <Row>
        <Col md={6} lg={4}>
          <TodoForm />
        </Col>
        <Col md={6} lg={8}>
          {todoList.map(item => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
}