import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos } from '../api/todoapi';

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
    <div>
      <h2>Todo List (Axios)</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
        placeholder="Type something..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
