import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex gap-6">
      <Link
        to="/"
        className="hover:text-blue-400 font-semibold"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="hover:text-green-400 font-semibold"
      >
        About
      </Link>
    </header>
  )
}

export default Header
