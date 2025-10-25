import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import MyProfile from "./components/MyProfile";
import PrivateRoute from "./components/PrivateRoute";
import SkillDetails from "./components/SkillDetails";

import Navbar from "./components/Navbar";




import UpcomingWorkshops from "./components/UpcomingWorkshops";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";

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
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
         <Route
  path="/details/:skillId"
  element={
    <PrivateRoute>
      <SkillDetails />
    </PrivateRoute>
  }
/>
          <Route path="/forgot-password" element={<ForgotPassword />} />


          <Route path="/workshops" element={<UpcomingWorkshops />} />
          <Route path="*"
           element={<Navigate to="/" replace />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
