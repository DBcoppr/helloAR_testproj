import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Verify from "./pages/login/Verify";
import { Suspense } from "react";
import { LoginDetailProvider } from "./context/loginContext";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginDetailProvider>
              <Login />
            </LoginDetailProvider>
          }
        />
        <Route
          path="/verify"
          element={
            <LoginDetailProvider>
              <Verify />
            </LoginDetailProvider>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={"Something went wrong....."} />
      </Routes>
    </BrowserRouter>
  );
}
