import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import AppRouter from './routes/approutes';
import TodoList from './components/addtodo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <TodoList />
    </BrowserRouter>
  );
}

export default App;
