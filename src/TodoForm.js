import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function TodoForm() {
  return (
    <div className="todo-form">
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
  )
}

function ItemForm(props){
  const [title, setTitle] = useState('');
  const [danger, setDanger] = useState(false);

  console.log({ title, danger })

  const { item, onSave } = props;

  const handleTitleChange = e => setTitle(e.target.value);
  const handleDangerChange = e => setDanger(e.target.checked);

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submit', { title, danger })

    const newTitle = {title, danger, saved: true};
    onSave(newTitle);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input title="title" placeholder="Title"
      value={title} onChange={handleTitleChange} />
      <label>
        Dangerous:
          <input type="checkbox" name="dangerous" value="yes"
            checked={danger} onChange={handleDangerChange} />
      </label>
      <button>Add Todo Item</button>
    </form>
  )
}




function ListItem(props)
  {
    const { item } = props;

    const liClassName = itemClassName(item);

    return (
      <li className={liClassName}>
        {item.title}
      </li>
    );
  }

  function itemClassName(item)
  {
    if (item.title.length > 4)
      return 'danger';

    return 'fun';
  }