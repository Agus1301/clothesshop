import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [filterSize, setFilterSize] = useState('');
  const [filterColor, setFilterColor] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesSize = filterSize ? p.size === filterSize : true;
    const matchesColor = filterColor ? p.color.toLowerCase() === filterColor.toLowerCase() : true;
    return matchesSearch && matchesSize && matchesColor;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Produkty</h2>
      <div>
        <input
          type="text"
          placeholder="Szukaj..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <select value={filterSize} onChange={e => setFilterSize(e.target.value)} style={{ marginRight: 10 }}>
          <option value="">Wszystkie rozmiary</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <select value={filterColor} onChange={e => setFilterColor(e.target.value)}>
          <option value="">Wszystkie kolory</option>
          <option value="Red">Czerwony</option>
          <option value="Blue">Niebieski</option>
          <option value="Black">Czarny</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>Brak produktów spełniających kryteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
