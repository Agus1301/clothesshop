import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu powinna być integracja z backendem - na razie tylko przekierowanie
    alert('Rejestracja zakończona sukcesem!');
    navigate('/login');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Hasło:</label><br />
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Register;
