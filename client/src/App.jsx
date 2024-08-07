import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 hover:text-indigo-800"
        >
          Home
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/tasks" className="text-gray-700 hover:text-gray-900">
                Tasks
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="text-gray-700 hover:text-gray-900"
              >
                Register
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
