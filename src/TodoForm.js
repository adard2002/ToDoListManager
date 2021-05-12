import { Form, Button } from 'react-bootstrap';

export default function TodoForm() {
  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.target.TodoItem.value, e.target.TodoAssigned.value, e.target.slider.value);
  };
  return (
    <div className="todo-form">
      <h2>Add To Do Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="AddTodo">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="TodoItem" placeholder="Item Details" />
        </Form.Group>
        <Form.Group controlId="AssignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="TodoAssigned" placeholder="Assignee Name" />
        </Form.Group>
        <Form.Group controlId="Difficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range" min="0" max="5" step="1" name="slider"/>
        </Form.Group>
        <Button type="submit" variant="primary">Add Item</Button>
      </Form>
    </div>
  )
}
