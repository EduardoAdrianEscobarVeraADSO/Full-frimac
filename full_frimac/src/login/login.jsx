// src/Login.jsx
import React, { useState } from 'react';
import './Login.css'; 
import Button from '../components/button'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log('Registro:', { username, email, password });
    } else {
      console.log('Login:', { username, password });
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>{isRegister ? 'Registro' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`input ${username ? 'active' : ''}`}
              />
              <label htmlFor="username" className="label">Usuario</label>
            </div>
          </div>

          {isRegister && (
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`input ${email ? 'active' : ''}`}
                />
                <label htmlFor="email" className="label">Email</label>
              </div>
            </div>
          )}

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`input ${password ? 'active' : ''}`}
              />
              <label htmlFor="password" className="label">Contraseña</label>
            </div>
          </div>

          <Button type="submit" className="submitButton">
            {isRegister ? 'Registrarse' : 'Login'}
          </Button>
        </form>

        <Button onClick={toggleForm} className="toggleButton">
          {isRegister ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
        </Button>
      </div>
    </div>
  );
};

export default Login;
