import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import './Home.css';

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="welcome-container">
      <h1>Bem-vindo, {user.username}</h1>
      <p>Esperamos que você goste da experiência.</p>
    </div>
  );
}

export default Home;
