import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MilkForm from "./components/MilkForm";
import EOPage from "./components/EOPage";
import AdminPage from "./components/AdminPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h2 className="text-center">Milk Entry System</h2>

        <nav className="text-center mb-3">
          <Link to="/" className="btn btn-primary m-1">Society</Link>
          <Link to="/eo" className="btn btn-warning m-1">EO</Link>
          <Link to="/admin" className="btn btn-success m-1">Admin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MilkForm />} />
          <Route path="/eo" element={<EOPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
