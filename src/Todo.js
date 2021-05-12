import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


const todoList = [
  {
    "id": 1,
    "title": "Take care of critters",
    "difficulty": 1,
    "assignedTo": "Ricardo",
    "completed": false
  },
  {
    "id": 2,
    "title": "Take the cats out for a nice long walk",
    "difficulty": 1,
    "assignedTo": "Stephanie",
    "completed": true
  },
  {
    "id": 3,
    "title": "Run around the block and run around in circles",
    "difficulty": 4,
    "assignedTo": "BECKY",
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