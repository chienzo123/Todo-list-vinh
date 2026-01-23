import { Routes, Route, Navigate } from 'react-router-dom';

import About from '../about';
import Home from '../home';
import LoginForm from '../../components/forms/login';
import RegisterForm from '../../components/forms/register';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
