import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const [qty, setQty] = useState(1);

  return (
    <div style={{ border: '1px solid #ddd', padding: 10, margin: 10, maxWidth: 250 }}>
      <h3>{product.name}</h3>
      <p>Cena: {product.price.toFixed(2)} PLN</p>
      <p>Rozmiar: {product.size}</p>
      <p>Kolor: {product.color}</p>
      <p>Dostępność: {product.stock > 0 ? `${product.stock} szt.` : 'Brak'}</p>
      {product.stock > 0 && (
        <>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={qty}
            onChange={e => setQty(Math.min(Math.max(1, e.target.value), product.stock))}
          />
          <button onClick={() => addToCart(product, qty)} style={{ marginLeft: 5 }}>
            Dodaj do koszyka
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
