import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import AppRouter from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
