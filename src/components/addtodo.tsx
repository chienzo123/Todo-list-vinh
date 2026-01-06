import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos } from '../api/todoapi';
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';

type Todo = {
  id: number;
  title: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  // Load todos
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  // Add todo
  const handleAdd = async () => {
    if (!title) return;

    const res = await addTodo(title);

    setTodos((prev) => [{ id: res.data.id, title: res.data.title }, ...prev]);

    setTitle('');
  };

  // Delete todo
  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Todo List (Axios)
      </Typography>

      <TextField
        fullWidth
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
        placeholder="Type something..."
      />

      <Button fullWidth variant="contained" sx={{ mt: 1 }} onClick={handleAdd}>
        Add
      </Button>

      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton onClick={() => handleDelete(todo.id)}>❌</IconButton>
            }
          >
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
