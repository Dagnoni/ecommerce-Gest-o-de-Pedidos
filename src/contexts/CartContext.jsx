import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [produtos] = useState([
    { id: 1, nome: 'Notebook', preco: 2500 },
    { id: 2, nome: 'Mouse', preco: 50 },
    { id: 3, nome: 'Teclado', preco: 150 },
    { id: 4, nome: 'Monitor', preco: 800 },
  ]);

  const [carrinho, setCarrinho] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const addCarrinho = (produto) => {
    setCarrinho([...carrinho, { ...produto, id: Math.random() }]);
  };

  const removeCarrinho = (id) => {
    setCarrinho(carrinho.filter(i => i.id !== id));
  };

  const finalizarPedido = (cliente) => {
    const total = carrinho.reduce((s, i) => s + i.preco, 0);
    setPedidos([...pedidos, { id: pedidos.length + 1, cliente, total, data: new Date().toLocaleDateString(), itens: carrinho.length }]);
    setCarrinho([]);
  };

  return (
    <CartContext.Provider value={{ produtos, carrinho, pedidos, addCarrinho, removeCarrinho, finalizarPedido }}>
      {children}
    </CartContext.Provider>
  );
}
