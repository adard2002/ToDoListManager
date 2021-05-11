import Badge from 'react-bootstrap/Badge';
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
    <>
      <h1>
        To Do List Manager <Badge variant="secondary">{incompletedCount}</Badge>
      </h1>
      <TodoForm />
      {todoList.map(item => (
        <TodoItem todo={item} />
      ))}
    </>
  );
}