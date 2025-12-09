import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
      <h1>Hello World</h1>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
