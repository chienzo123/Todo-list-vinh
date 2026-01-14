import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import LoginForm from '../components/forms/login';
import RegisterForm from '../components/forms/register';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRouter;
