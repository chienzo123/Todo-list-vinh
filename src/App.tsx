import { BrowserRouter } from 'react-router-dom';

import Header from './components/auth/header';
import AppRouter from './pages/routes/approutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
