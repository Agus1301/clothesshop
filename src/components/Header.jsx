import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart, user, logout } = useContext(AppContext);
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 10, backgroundColor: '#eee' }}>
      <div>
        <Link to="/">Sklep odzieżowy</Link>
      </div>
      <nav>
        <Link to="/cart">Koszyk ({cart.reduce((acc, i) => acc + i.qty, 0)})</Link> |{' '}
        {user ? (
          <>
            Witaj, {user.name} <button onClick={logout}>Wyloguj</button>
          </>
        ) : (
          <>
            <Link to="/login">Zaloguj</Link> | <Link to="/register">Zarejestruj</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
