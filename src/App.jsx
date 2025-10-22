import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 24 }}>
        <nav style={{ marginBottom: 16 }}>
          <Link to="/signin" style={{ marginRight: 12 }}>Signin</Link>
          <Link to="/signup" style={{ marginRight: 12 }}>Signup</Link>
          <Link to="/home">Home</Link>
        </nav>

        <Routes>
          {/* ALWAYS land on the Signin page first */}
          <Route path="/" element={<Navigate to="/signin" replace />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected area */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* unknown paths -> signin */}
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
