import { Form, Button } from 'react-bootstrap';

export default function TodoForm() {
  return (
    <div class="todo-form">
      <h2>Add To Do Item</h2>
      <Form>
        <Form.Group controlId="AddTodo">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" placeholder="Item Details" />
        </Form.Group>
        <Form.Group controlId="AssignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" placeholder="Assignee Name" />
        </Form.Group>
        <Form.Group controlId="Difficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range" min="0" max="5" step="1" />
        </Form.Group>
        <Button variant="primary">Add Item</Button>
      </Form>
    </div>
  );
};