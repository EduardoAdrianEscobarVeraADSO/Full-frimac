// src/App.jsx
import React from 'react';
import Login from './login/login'; // Suponiendo que tienes un componente Login
import Header from './components/header'; // Importa el nuevo componente Header

const App = () => {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
};

export default App;
