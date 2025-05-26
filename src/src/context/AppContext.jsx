import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const mockProducts = [
  { id: 1, name: 'T-shirt Basic', price: 49.99, size: 'M', color: 'Red', stock: 10 },
  { id: 2, name: 'Jeans Classic', price: 129.99, size: 'L', color: 'Blue', stock: 5 },
  { id: 3, name: 'Bluza Hoodie', price: 99.99, size: 'S', color: 'Black', stock: 8 },
  // ... dodaj więcej
];

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(mockProducts);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Dodaj do koszyka
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, qty: Math.min(item.qty + qty, product.stock) }
            : item
        );
      }
      return [...prev, { product, qty }];
    });
  };

  // Usuń z koszyka
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Wyczyszczenie koszyka po zamówieniu
  const clearCart = () => setCart([]);

  // Prosta symulacja logowania
  const login = (email, password) => {
    if (email && password) {
      setUser({ email, name: 'Jan Kowalski' });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
