import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex gap-6 items-center justify-between">
      <div className="flex gap-6">
        <Link to="/home" className="hover:text-blue-400 font-semibold">
          Home
        </Link>
        <Link to="/about" className="hover:text-green-400 font-semibold">
          About
        </Link>
      </div>
      <div className="flex gap-6">
        <Link
          to="/auth/register"
          className="hover:text-green-400 font-semibold"
        >
          Register
        </Link>
        <Link
          to="/auth/login"
          className="hover:text-green-400 font-semibold"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
