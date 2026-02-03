import { Routes, Route, Navigate } from 'react-router-dom';

import About from '../About';
import Home from '../Home';
import LoginForm from '../../components/forms/login';
import RegisterForm from '../../components/forms/register';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
