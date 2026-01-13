import { useEffect, useState } from 'react';
import https from '../api/https';
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  CircularProgress,
  Alert,
} from '@mui/material';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load todos
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await https.get<Todo[]>('/todos?_limit=10');
      setTodos(res.data);
    } catch (err) {
      setError('Failed to load todos. Please try again.');
      console.error('Error loading todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add todo
  const handleAdd = async () => {
    if (!title.trim()) return;

    try {
      setError(null);
      const res = await https.post<Todo>('/todos', {
        title: title.trim(),
        completed: false,
        userId: 1,
      });
      setTodos((prev) => [res.data, ...prev]);
      setTitle('');
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    }
  };

  // Toggle completed status
  const handleToggle = async (todo: Todo) => {
    try {
      setError(null);
      await https.patch(`/todos/${todo.id}`, { completed: !todo.completed });
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, completed: !t.completed } : t
        )
      );
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const handleDelete = async (id: number) => {
    try {
      setError(null);
      await https.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        📝 Todo List
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        Using Axios for API calls
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
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
          placeholder="What needs to be done?"
          disabled={loading}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={loading || !title.trim()}
        >
          Add
        </Button>
      </Box>

      {loading && todos.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {todos.length} {todos.length === 1 ? 'item' : 'items'}
          </Typography>
          <List sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  '&:last-child': { borderBottom: 'none' },
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => handleDelete(todo.id)}
                    color="error"
                    size="small"
                  >
                    🗑️
                  </IconButton>
                }
              >
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggle(todo)}
                  edge="start"
                />
                <ListItemText
                  primary={todo.title}
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
