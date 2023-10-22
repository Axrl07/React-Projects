import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
    const [user, setUser] = useState(null);

    return (
        <Routes>
            // ruta login
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            
            // ruta register
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;