import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import MyProfile from "./components/MyProfile";
import PrivateRoute from "./components/PrivateRoute";
import SkillDetails from "./components/SkillDetails"; // Import SkillDetails component
import ForgotPassword from "./components/ForgotPassword"; // Import ForgotPassword page

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <div style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected route for profile */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />

          {/* Public route for SkillDetails */}
          <Route path="/details/:skillId" element={<SkillDetails />} />
          
          {/* Forgot Password route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Redirect user to the home page if they visit an undefined route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
