import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, user, clearCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('karta');
  const [error, setError] = useState('');

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Musisz się zalogować, aby złożyć zamówienie.</h2>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.qty * item.product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) {
      setError('Podaj adres dostawy');
      return;
    }
    // Tu powinna być integracja z backendem
    alert(`Zamówienie złożone na kwotę ${total.toFixed(2)} PLN.\nAdres: ${address}\nPłatność: ${payment}`);
    clearCart();
    navigate('/');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Podsumowanie zamówienia</h2>
      <p>Łączna kwota: {total.toFixed(2)} PLN</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Adres dostawy:</label><br />
          <textarea value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Metoda płatności:</label><br />
          <select value={payment} onChange={e => setPayment(e.target.value)}>
            <option value="karta">Karta kredytowa</option>
            <option value="paypal">PayPal</option>
            <option value="przelew">Przelew bankowy</option>
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Złóż zamówienie</button>
      </form>
    </div>
  );
};

export default Checkout;
