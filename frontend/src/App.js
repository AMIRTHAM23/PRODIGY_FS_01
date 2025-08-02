import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isAuthenticated = () => !!localStorage.getItem('token');

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
