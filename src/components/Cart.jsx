import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  const total = cart.reduce((acc, item) => acc + item.qty * item.product.price, 0);

  if (cart.length === 0) return (
    <div style={{ padding: 20 }}>
      <h2>Twój koszyk jest pusty</h2>
      <Link to="/">Przejdź do produktów</Link>
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Twój koszyk</h2>
      <ul>
        {cart.map(({ product, qty }) => (
          <li key={product.id} style={{ marginBottom: 10 }}>
            {product.name} - {qty} x {product.price.toFixed(2)} PLN = {(qty * product.price).toFixed(2)} PLN
            <button onClick={() => removeFromCart(product.id)} style={{ marginLeft: 10 }}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
      <h3>Łącznie: {total.toFixed(2)} PLN</h3>
      <Link to="/checkout">
        <button>Przejdź do zamówienia</button>
      </Link>
    </div>
  );
};

export default Cart;
